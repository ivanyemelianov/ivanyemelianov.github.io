const dict = new Map([
["dictionary", "từ điển"], // Noun
  ["die", "chết"], // Verb
  ["diet", "chế độ ăn uống"], // Noun
  ["difference", "sự khác biệt"], // Noun
  ["different", "khác biệt"], // Adjective
  ["difficult", "khó khăn"], // Adjective
  ["dinner", "bữa tối"], // Noun
  ["dirty", "bẩn"], // Adjective
  ["discuss", "thảo luận"], // Verb
  ["dish", "món ăn, đĩa"], // Noun
  ["do", "làm"], // Verb, Auxiliary Verb
  ["doctor", "bác sĩ"], // Noun
  ["dog", "con chó"], // Noun
  ["dollar", "đô la"], // Noun
  ["door", "cửa"], // Noun
  ["down", "xuống, phía dưới"], // Adverb, Preposition
  ["downstairs", "tầng dưới"], // Adverb
  ["draw", "vẽ"], // Verb
  ["dress", "váy, mặc đồ"], // Noun, Verb
  ["drink", "đồ uống, uống"], // Noun, Verb
  ["drive", "lái xe"], // Verb
  ["driver", "lái xe, người lái xe"], // Noun
  ["during", "trong suốt, trong khi"], // Preposition
  ["DVD", "đĩa DVD"], // Noun
  ["each", "mỗi, từng"], // Determiner, Pronoun, Adverb
  ["ear", "tai"], // Noun
  ["early", "sớm"], // Adjective, Adverb
  ["east", "phía đông"], // Noun, Adjective, Adverb
  ["easy", "dễ dàng"], // Adjective
  ["eat", "ăn"], // Verb
  ["egg", "trứng"], // Noun
  ["eight", "tám"], // Number
  ["eighteen", "mười tám"], // Number
  ["eighty", "tám mươi"], // Number
  ["elephant", "con voi"], // Noun
  ["eleven", "mười một"], // Number
  ["else", "khác"], // Adverb
  ["email", "thư điện tử, gửi email"], // Noun, Verb
  ["end", "kết thúc, cuối cùng"], // Noun, Verb
  ["enjoy", "thưởng thức, tận hưởng"], // Verb
  ["enough", "đủ"], // Determiner, Pronoun, Adverb
  ["euro", "euro (tiền tệ)"], // Noun
  ["even", "thậm chí, ngay cả"], // Adverb
  ["evening", "buổi tối"], // Noun
  ["event", "sự kiện"], // Noun
  ["ever", "bao giờ"], // Adverb
  ["every", "mỗi"], // Determiner
  ["everybody", "mọi người"], // Pronoun
  ["everyone", "mỗi người"], // Pronoun
  ["everything", "mọi thứ"], // Pronoun
  ["exam", "kỳ thi"], // Noun
  ["example", "ví dụ"], // Noun
  ["excited", "hào hứng, phấn khích"], // Adjective
  ["exciting", "hấp dẫn, thú vị"], // Adjective
  ["exercise", "bài tập, luyện tập"], // Noun, Verb
  ["expensive", "đắt tiền"], // Adjective
  ["explain", "giải thích"], // Verb
  ["extra", "thêm, bổ sung"], // Adjective
  ["eye", "mắt"], // Noun
  ["face", "khuôn mặt"], // Noun
  ["fact", "sự thật"], // Noun
  ["fall", "rơi, ngã"], // Verb
  ["false", "sai, không đúng"], // Adjective
  ["family", "gia đình, thuộc về gia đình"], // Noun, Adjective
  ["famous", "nổi tiếng"], // Adjective
  ["fantastic", "tuyệt vời, phi thường"], // Adjective
  ["far", "xa"], // Adverb
  ["farm", "nông trại"], // Noun
  ["farmer", "nông dân"], // Noun
  ["fast", "nhanh, nhanh chóng"], // Adjective, Adverb
  ["fat", "mập, béo"], // Adjective
  ["father", "cha"], // Noun
  ["favourite", "yêu thích, sự yêu thích"], // Adjective, Noun
  ["February", "tháng Hai"], // Noun
  ["feel", "cảm thấy"], // Verb
  ["feeling", "cảm giác, cảm xúc"], // Noun
  ["festival", "lễ hội"], // Noun
  ["few", "ít, vài"], // Determiner, Adjective, Pronoun
  ["fifteen", "mười lăm"], // Number
  ["fifth", "thứ năm"], // Number
  ["fifty", "năm mươi"], // Number
  ["fill", "đổ đầy, lấp đầy"], // Verb
  ["film", "phim"], // Noun
  ["final", "cuối cùng, quyết định"], // Adjective
  ["find", "tìm thấy"], // Verb
  ["fine", "tốt, ổn"], // Adjective
  ["finish", "hoàn thành, kết thúc"], // Verb
  ["fire", "lửa, hỏa hoạn"], // Noun
  ["first", "thứ nhất, đầu tiên"], // Determiner, Number, Adverb
  ["fish", "cá"], // Noun
  ["five", "năm"], // Number
  ["flat", "bằng phẳng, căn hộ"], // Noun
  ["flight", "chuyến bay"], // Noun
  ["floor", "sàn nhà, tầng"], // Noun
  ["flower", "hoa"], // Noun
  ["fly", "bay, thả"], // Verb
  ["follow", "theo, đi theo"], // Verb
  ["food", "thức ăn"], // Noun
  ["foot", "bàn chân"], // Noun
  ["football", "bóng đá"], // Noun
  ["for", "cho, đối với"], // Preposition
  ["forget", "quên"], // Verb
  ["form", "hình thức, tạo thành"], // Noun, Verb
  ["forty", "bốn mươi"], // Number
  ["four", "bốn"], // Number
  ["fourteen", "mười bốn"], // Number
  ["fourth", "thứ tư"], // Number
  ["free", "miễn phí, tự do"], // Adjective
  ["Friday", "thứ Sáu"], // Noun
  ["friend", "bạn bè"], // Noun
  ["friendly", "thân thiện"], // Adjective
  ["from", "từ"], // Preposition
  ["front", "phía trước, mặt trước"], // Noun, Adjective
  ["fruit", "trái cây"], // Noun
  ["full", "đầy"], // Adjective
  ["fun", "vui, sự vui vẻ"], // Noun
  ["funny", "buồn cười, hài hước"], // Adjective
  ["future", "tương lai"], // Noun
  ["game", "trò chơi"], // Noun
  ["garden", "vườn"], // Noun
  ["geography", "địa lý"], // Noun
  ["get", "lấy, nhận, có được"], // Verb
  ["girl", "cô gái"], // Noun
  ["girlfriend", "bạn gái"], // Noun
  ["give", "đưa, tặng"], // Verb
  ["glass", "ly, kính"], // Noun
  ["go", "đi"], // Verb
  ["good", "tốt"], // Adjective
  ["goodbye", "tạm biệt"], // Exclamation, Noun
  ["grandfather", "ông"], // Noun
  ["grandmother", "bà"], // Noun
  ["grandparent", "ông bà"], // Noun
  ["great", "tuyệt vời, vĩ đại"], // Adjective
  ["green", "xanh lá cây"], // Adjective, Noun
  ["grey", "màu xám"], // Adjective, Noun
  ["group", "nhóm"], // Noun
  ["grow", "tăng trưởng, phát triển"], // Verb
  ["guess", "đoán, sự đoán"], // Verb, Noun
  ["guitar", "guitar"], // Noun
  ["gym", "phòng tập thể dục"], // Noun
  ["hair", "tóc"], // Noun
  ["half", "một nửa"], // Noun, Determiner, Pronoun
  ["hand", "bàn tay"], // Noun
  ["happen", "xảy ra"], // Verb
  ["happy", "hạnh phúc, vui vẻ"], // Adjective
  ["hard", "khó, cứng"], // Adjective, Adverb
  ["hat", "mũ"], // Noun
  ["hate", "ghét"], // Verb
  ["have", "có"], // Verb
  ["have to", "phải, cần phải"], // Modal verb
  ["he", "anh ấy"], // Pronoun
  ["head", "đầu"], // Noun
  ["health", "sức khỏe"], // Noun
  ["healthy", "khỏe mạnh"], // Adjective
  ["hear", "nghe"], // Verb
  ["hello", "xin chào"], // Exclamation, Noun
  ["help", "giúp đỡ, sự giúp đỡ"], // Verb, Noun
  ["her", "cô ấy, của cô ấy"], // Pronoun, Determiner
  ["here", "ở đây"], // Adverb
  ["hey", "này, chào"], // Exclamation
  ["hi", "chào"], // Exclamation
  ["high", "cao"], // Adjective
  ["him", "anh ấy, ông ấy"], // Pronoun
  ["his", "của anh ấy, của ông ấy"], // Determiner
  ["history", "lịch sử"], // Noun
  ["hobby", "sở thích"], // Noun
  ["holiday", "ngày lễ, kỳ nghỉ"], // Noun
  ["home", "nhà, về nhà"], // Noun, Adverb
  ["homework", "bài tập về nhà"], // Noun
  ["hope", "hy vọng, mong muốn"], // Verb
  ["horse", "ngựa"], // Noun
  ["hospital", "bệnh viện"], // Noun
  ["hot", "nóng"], // Adjective
  ["hotel", "khách sạn"], // Noun
  ["hour", "giờ"], // Noun
  ["house", "nhà"], // Noun
  ["how", "như thế nào"], // Adverb
  ["however", "tuy nhiên"], // Adverb
  ["hundred", "trăm"], // Number
  ["hungry", "đói"], // Adjective
  ["husband", "chồng"], // Noun
  ["I", "tôi"], // Pronoun
  ["ice", "băng"], // Noun
  ["ice cream", "kem"], // Noun
  ["idea", "ý tưởng"], // Noun
  ["if", "nếu"], // Conjunction
  ["imagine", "hình dung, tưởng tượng"], // Verb
  ["important", "quan trọng"], // Adjective
  ["improve", "cải thiện"], // Verb
  ["in", "trong, vào"], // Preposition, Adverb
  ["include", "bao gồm"], // Verb
  ["information", "thông tin"], // Noun
  ["interest", "sở thích, quan tâm"], // Noun, Verb
  ["interested", "quan tâm, thích thú"], // Adjective
  ["interesting", "thú vị"], // Adjective
  ["internet", "internet"], // Noun
  ["interview", "phỏng vấn"], // Noun, Verb
  ["into", "vào"], // Preposition
  ["introduce", "giới thiệu"], // Verb
  ["island", "hòn đảo"], // Noun
])