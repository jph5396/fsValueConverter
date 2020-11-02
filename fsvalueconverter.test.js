const { fsValueConverter } = require(".")


const data = {
    West: {
        mapValue: {
            fields: {
                scorepre: {
                    doubleValue: 891.528111612499
                },
                change: {
                    doubleValue: -7.209331572483052
                },
                scorepost: {
                    doubleValue: 884.3187800400159
                },
                name: {
                    stringValue: "Daishoho"
                },
                id: {
                    integerValue: "12040"
                },
                rank: {
                    stringValue: "J12w"
                },
            }
        }
    },
    bashoid: {
        integerValue: "202009"
    },
    day: {
        integerValue: "15"
    },
    East: {
        mapValue: {
            fields: {
                scorepre: {
                    doubleValue: 905
                },
                rank: {
                    stringValue: "Ms"
                },
                name: {
                    stringValue: "Ura"
                },
                id: {
                    integerValue: "12226"
                },
                change: {
                    doubleValue: 7.209331572483052
                },
                scorepost: {
                    doubleValue: 912.209331572483
                }
            }
        }
    },
    boutnum: {
        integerValue: "91"
    }
}

console.log(fsValueConverter(data));