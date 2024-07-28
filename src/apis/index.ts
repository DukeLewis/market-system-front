// 请求地址
const apiHostUrl = process.env.API_HOST_URL ? process.env.API_HOST_URL : "https://console-mock.apipost.cn/mock/39887471-73bd-48f1-81c0-185604fcdc21";

const url = {
    queryRaffleAwardList: `${apiHostUrl}/api/v1/raffle/query_raffle_award_list`,
    randomRaffle: `${apiHostUrl}/api/v1/raffle/random_raffle`
}

const apipost_id = "ed497a";
/**
 * 查询抽奖奖品列表
 * @param strategyId 策略ID
 */
export const queryRaffleAwardList = (strategyId: number) => {
    try {
        return fetch(`${url.queryRaffleAwardList}?strategyId=${strategyId}&apipost_id=${apipost_id}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
    } catch (error) {
        return fetch("{\n" +
            "    \"code\": \"0001\",\n" +
            "    \"info\": \"调用失败\",\n" +
            "    \"data\": [\n" +
            "}");
    }
}

export const randomRaffle = (strategyId: number) => {
    try {
        return fetch( `${url.randomRaffle}?strategyId=${strategyId}&apipost_id=${apipost_id}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
    } catch (error) {
        return fetch("{\n" +
            "    \"code\": \"0001\",\n" +
            "    \"info\": \"调用失败\",\n" +
            "    \"data\": [\n" +
            "}");
    }
}
