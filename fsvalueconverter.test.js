const {fsValueConverter} = require('./fsvalueconverter');


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


test('check if object matches', () => {
    obj = {
        West: {
            id: 12040,
            rank: "J12w",
            name: "Daishoho",
            scorepre: 891.528111612499,
            scorepost: 884.3187800400159,
            change: -7.209331572483052

        },
        East: {
            id: 12226,
            rank: "Ms",
            name: "Ura",
            scorepre: 905,
            scorepost: 912.209331572483,
            change: 7.209331572483052
        },
        bashoid: 202009,
        day: 15,
        boutnum: 91
    }
    expect(fsValueConverter(data)).toMatchObject(obj)
})