const locators = {
LOGIN: {
    USER: '[data-test=email]',
    PASSWORD: '[data-test=passwd]',
    BTN_LOGIN: '.btn'
    },
TOAST: {
    MESSAGE: '.toast-message',
    CLOSE: '.toast-close-button'
},
MENU: {
    SETTINGS: '[data-test=menu-settings]',
    CONTAS: '[href="/contas"]',
    RESET: '[href="/reset"]'
},
ACCOUNT: {
    NAME_FIELD: '[data-test=nome]',
    BTN_SAVE: '.btn',
    XP_BTN_UPDATE: '//table//td[contains(.,\'Conta de teste\')]/..//i[@class=\'far fa-edit\']',
    XP_NAME_LABEL_UPDATED: '//table//td[contains(.,\'Conta de teste atualizada\')]'
}
}

export default locators;