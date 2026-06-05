const noblox = require("noblox.js");

const GROUP_ID = 516364128;
const CHANNEL_ID = "1508177187872706570";

const DONATIONS = {
    "88290015542180": 100,
    "73756595444591": 200,
    "90643578592427": 500,
    "129314269248640": 800,
    "123942340124457": 1000
};

async function checkPurchases(client) {
    try {

        const transactions = await noblox.getGroupTransactions(
            GROUP_ID,
            "Sale",
            100
        );

        for (const transaction of transactions) {

            const transactionId = String(transaction.id);

            const exists = client.db
                .prepare("SELECT * FROM logged_transactions WHERE transaction_id = ?")
                .get(transactionId);

            if (exists) continue;

            const assetId = String(transaction.details?.id);

            if (!DONATIONS[assetId]) continue;

            const buyerId = transaction.agent.id;

            const user = await noblox.getPlayerInfo(buyerId);

            const amount = DONATIONS[assetId];

            const channel = await client.channels.fetch(CHANNEL_ID);

            await channel.send({
                flags: 32768,
                components: [
                    {
                        type: 17,
                        components: [
                            {
                                type: 10,
                                content: `Thank you ${user.username} for donating **${amount} ROBUX**!`
                            },
                            {
                                type: 14,
                                spacing: 2
                            },
                            {
                                type: 12,
                                items: [
                                    {
                                        media: {
                                            url: "https://media.discordapp.net/attachments/1503255904743719043/1511582257553608734/image.png?ex=6a239d2e&is=6a224bae&hm=a00f5ac410b4f727d3b0a430f61d2051272a85d70c9866255e373607b79554b4&=&format=webp&quality=lossless"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });

            client.db
                .prepare("INSERT INTO logged_transactions (transaction_id) VALUES (?)")
                .run(transactionId);

            console.log(
                `[DONATION] ${user.username} donated ${amount} ROBUX`
            );
        }

    } catch (err) {
        console.error("Purchase Logger Error:", err);
    }
}

async function startPurchaseLogger(client) {

    await noblox.setCookie(process.env.ROBLOX_COOKIE);

    console.log("Purchase logger started.");

    await checkPurchases(client);

    setInterval(() => {
        checkPurchases(client);
    }, 60000);
}

module.exports = {
    startPurchaseLogger
};