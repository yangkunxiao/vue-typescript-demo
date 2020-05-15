interface IPriceData {
	/** id */
	id: number
	/** 市场价格 */
	m: string
	/** 折扣价 */
	op: string
}


type IPriceDataArray = IPriceData[];

function getData(){
     // Promise的泛型参数使用了IPriceDataArray类型，then里面返回的数据就是IPriceDataArray类型
    return new Promise<IPriceDataArray>((resolve,reject) => {
        // fetch('https://xxxxxxx/prices/pgets?ids=P_100012&area=&source=', data => {
            // console.log(data)
            resolve([
                {
                    id:10,
                    m:'kaka',
                    op:'kaka'
                }
            ])
        // })
    })
}

getData().then(data => {
    console.log(data)
});

