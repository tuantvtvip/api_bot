exports.name = '/taixiu';
exports.index = async(req, res, next) => {
    var images = ['https://imgur.com/umW2lN3.jpg', 'https://imgur.com/u2S2LpE.jpg', 'https://imgur.com/ScsOQu3.jpg', 'https://imgur.com/ucXz2KD.jpg', 'https://imgur.com/UmnAapA.jpg', 'https://imgur.com/utjboNt.jpg'],
        random_1 = Math.floor(Math.random() * 6) + 1,
        random_2 = Math.floor(Math.random() * 6) + 1,
        random_3 = Math.floor(Math.random() * 6) + 1,
        total = random_1 + random_2 + random_3
    if(total >= 4 && total <= 10) { var result = 'xỉu' }
    else if(total >= 11 && total <= 17) { var result = 'tài'}
    else { var result = false }
    try {
        return res.json({ 
            total: total,
            result: result,
            images: [
                images[random_1-1],
                images[random_2-1],
                images[random_3-1]
            ],
            author: 'D-Jukie'
        })
    } catch(e) {
        res.json({ 
            error: 'Đã xảy ra lỗi với yêu cầu của bạn!'
        })
        return console.log(e)
    }
}
