/*
 * 这个正则表达式有两个作用
 * 1. 获取 `/system/path1/path2` 中的 `system`，用来做 `serverName` 对比
 * 1. 获取 `/system/path1/path2` 中的 `/system`，用来做替换
 */
const { data } = require('./data.js')

const reg = /^\/?(.+?)(?=(\/|$))/

const oldSystemAbbrs = [
  'ACTIVITY',
  'BILL',
  'BOOKERP',
  'BOOKRETRIEVALSYSTEM',
  'BOOKRETRIEVALSYSTEMEXE',
  'BOOKSALE',
  'COFFEE-SALE',
  'CZK',
  'DISTRIBUTION',
  'DISTRIBUTIONNEW',
  'DISTRIBUTIONTOOLS',
  'ELECTRONIC-INVOICE',
  'FEELINGS',
  'FINANCIAL',
  'FINANCIALMANAGET',
  'FLOWCONTROL',
  'HY',
  'JCZL',
  'KFRZ',
  'MARKETREPORT',
  'NEW-SHELF',
  'NEW-STATION',
  'PAYMENTSYSTEM',
  'PRODUCT',
  'PRODUCT-BASIC',
  'PURCHASESYSTEM',
  'QX',
  'REPEAT',
  'SALE-APP',
  'SALE-CLIENT',
  'SHELFSYSTEM',
  'SISYPHEAPP',
  'STOCK',
  'TICKETSYSTEM',
]

const getSystemNameByMenuPath = menuPath => {
  return menuPath.match(reg)[1]
}

const convertMenuPath = (menuPath, systemAbbr, systemPrefix = {}) => {
  if (!menuPath) return menuPath
  if (oldSystemAbbrs.includes(systemAbbr) || !systemAbbr) {
    const systemName = getSystemNameByMenuPath(menuPath)
    const newSystemName = convertSystemName(systemName)

    const newMenuPath = `/${systemPrefix[systemName] || newSystemName}/#${menuPath}`
    return newMenuPath
  } else {
    return `/${systemAbbr}/#${menuPath}`
  }
}

const convertSystemName = systemName => {
  switch (systemName) {
    // case "inventory":
    case 'implement':
    case 'statisticalAnalysisManagement':
    case 'frameNumberManagement':
    case 'shelf':
    case 'dailyInventory':
    case 'ticket':
    case 'ticketManage':
    case 'paymentSys':
    case 'oauth':
      return 'home'
    case 'book':
    case 'information':
    case 'distribution':
    case 'distributionImport':
    case 'invoice':
    case 'manage':
    case 'flowControl':
    case 'dataReport':
    case 'newInventory':
    case 'station':
    case 'productCenter':
    case 'purchase':
    case 'app':
      return systemName + 'Web'
    default:
      return systemName + 'Web'
  }
}

const convertServerMenuToSideMenu = (serverMenus, parentId, appName, clinentMenus, systemSymbol, filterPath) => {
  return serverMenus
    .filter(item => item.parentId === parentId)
    .filter(item => {
      let flag = true
      filterPath.forEach(path => {
        if (item.systemAbbr === path) {
          flag = false
        }
      })
      return flag
    })
    .map(item => {
      const currentApp = item.systemAbbr === appName
      let icon = 'list2'
      let match = []

      // 当前系统的菜单，附加上本地菜单的 icon 和 match
      if (currentApp) {
        const clientItem = clinentMenus.find(cm => cm.name === item.jurisdictionName)
        if (clientItem) {
          icon = clientItem.icon
          match = clientItem.match
        }
      }
      return {
        name: item.jurisdictionName,
        icon,
        match,
        path: currentApp
          ? item.urlAddress
          : convertMenuPath(item.urlAddress, item.systemAbbr, systemSymbol === 16 ? { oauth: 'oauth' } : {}),
        children: convertServerMenuToSideMenu(
          serverMenus,
          item.jurisdictionId,
          appName,
          clinentMenus,
          systemSymbol,
          filterPath
        ),
      }
    })
}
function treeToArray(list) {
  var newArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : []
  list.forEach(function (item) {
    var children = item.children

    if (children && children.length) {
      treeToArray(children, newArr) // delete item.children
    }

    newArr.push(item)
  })
  return newArr
}
const a = convertServerMenuToSideMenu(data, 0, 'app-admin', [], 8, ['market-center-app', 'app-mirror'])
console.log(a)
