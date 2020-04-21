/*
递归查找所有父级
*/
function findParent(data, id) {
    for (let i in data) {
        if (data[i].id === id) {
            return [];
        }
        if (data[i].children) {
            let result = findParent(data[i].children, id);
            if (result) {
                return result.concat(data[i]);
            }
        }
    }
}

function setParenStatus(data) {
    data.map((item) => {
        let result;
        if (item.children) {
            result = item.children.every((el) => el.checkAll === true);
            item.checkAll = result;
            setParenStatus(item.children);
        }
    });
}
let test = [
    {
        checkAll: false,
        name: 1,
        children: [
            {
                checkAll: null,
                name: 2,
                children: [
                    {
                        checkAll: true,
                        name: 4,
                    },
                    {
                        checkAll: true,
                        name: 5,
                    },
                ],
            },
            {
                checkAll: false,
                name: 3,
            },
        ],
    },
];

// 获取最后一级的的数据
function getMenu(data, result) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].children) {
            getMenu(data[i].children, result);
        } else {
            result.push(data[i]);
        }
    }
    return result;
}

// 测试
let tableData = [
    {
        name: '投放管理',
        level: 1,
        id: '1',
        checkAll: false,
        checked: [],
        children: [
            {
                name: '数据报表',
                level: 2,
                id: '1-1',
                checkAll: false,
                checked: [],
            },
            {
                name: '广告投放',
                level: 2,
                id: '1-2',
                checkAll: false,
                checked: [],
                children: [
                    {
                        name: '素材中心',
                        level: 3,
                        id: '1-1-1',
                        checked: [],
                    },
                    {
                        name: '监测链接',
                        level: 3,
                        id: '1-1-2',
                        checked: [],
                    },
                    {
                        name: '投放账号',
                        level: 3,
                        id: '1-1-3',
                        checked: [],
                    },
                ],
            },
        ],
    },
];

function setParentStatus(data) {
    data.map((item) => {
        let result;
        if (item.children) {
            result = item.children.every((el) => el.checkAll === true);
            item.checkAll = result;
            setParentStatus(item.children);
        }
    });
}
let data = [
    {
        children: [{ checkAll: true }, { checkAll: false }],
        checkAll: false,
    },
    {
        children: [{ checkAll: false }, { checkAll: false }],
        checkAll: true,
    },
    {
        children: [{ checkAll: null, children: [{ checkAll: true }, { checkAll: true }] }, { checkAll: true }],
        checkAll: false,
    },
];
