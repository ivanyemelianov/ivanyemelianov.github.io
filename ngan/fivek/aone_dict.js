const dict = new Map([
  ["a, an", "mạo từ không xác định"],
  ["about", "về, khoảng"],
  ["above", "bên trên, vượt quá"],
  ["across", "ngang qua, bên kia"],
  ["action", "hành động, động tác"],
  ["activity", "hoạt động, sinh hoạt"],
  ["actor", "diễn viên nam"],
  ["actress", "diễn viên nữ"],
  ["add", "thêm vào, cộng"],
  ["address", "địa chỉ, bài diễn văn"],
  ["adult", "người lớn, trưởng thành"],
  ["advice", "lời khuyên"],
  ["afraid", "sợ hãi, lo lắng"],
  ["after", "sau, tiếp theo"],
  ["afternoon", "buổi chiều"],
  ["again", "lại, một lần nữa"],
  ["age", "tuổi, thời đại"],
  ["ago", "trước đây"],
  ["agree", "đồng ý"],
  ["air", "không khí"],
  ["airport", "sân bay"],
  ["all", "tất cả"],
  ["also", "cũng, cũng vậy"],
  ["always", "luôn luôn"],
  ["amazing", "làm cho kinh ngạc"],
  ["and", "và"],
  ["angry", "tức giận"],
  ["animal", "động vật"],
  ["another", "khác"],
  ["answer", "câu trả lời, trả lời"],
  ["any", "bất kỳ"],
  ["anyone", "ai đó"],
  ["anything", "bất cứ điều gì"],
  ["apartment", "căn hộ"],
  ["apple", "quả táo"],
  ["April", "tháng tư"],
  ["area", "vùng, diện tích, lĩnh vực"],
  ["arm", "cánh tay"],
  ["around", "xung quanh"],
  ["arrive", "đến"],
  ["art", "nghệ thuật"],
  ["article", "bài báo"],
  ["artist", "nghệ sĩ"],
  ["as", "như, cũng, bằng"], // Preposition
  ["ask", "hỏi, đề nghị, mời"], // Verb
  ["at", "ở (địa điểm), vào lúc, hướng vào (chỉ hướng)"], // Preposition
  ["August", "tháng Tám"], // Noun
  ["aunt", "cô, dì"], // Noun
  ["autumn", "mùa thu"], // Noun
  ["away", "xa, tránh xa, mất"], // Adverb
  ["baby", "trẻ nhỏ, em bé"], // Noun
  ["back", "cái lưng, đằng sau, quay lại"], // Noun, Adverb
  ["bad", "xấu, tồi, ác"], // Adjective
  ["bag", "túi, bao"], // Noun
  ["ball", "quả bóng, banh"], // Noun
  ["banana", "quả chuối"], // Noun
  ["band", "ban nhạc, dải băng"], // Noun
  ["bank", "ngân hàng, bờ sông"], // Noun
  ["bath", "bồn tắm, sự tắm rửa"],
  ["bathroom", "nhà vệ sinh"], // Noun
  ["be", "là, thì, ở"], // Verb
  ["beach", "bãi biển"], // Noun
  ["beautiful", "đẹp"], // Adjective
  ["because", "bởi vì"], // Conjunction
  ["become", "trở nên, trở thành"], // Verb
  ["bed", "cái giường"], // Noun
  ["bedroom", "phòng ngủ"], // Noun
  ["beer", "rượu bia"], // Noun
  ["before", "trước, trước khi"], // Preposition
  ["begin", "bắt đầu"], // Verb
  ["beginning", "phần đầu"], // Noun
  ["behind", "đằng sau"], // Preposition, Adverb
  ["believe", "tin tưởng"], // Verb
  ["below", "dưới, ở bên dưới"], // Adverb, Preposition
  ["best", "tốt nhất"], // Adjective
  ["better", "tốt hơn"], // Adjective
  ["between", "giữa"], // Preposition
  ["bicycle", "xe đạp"], // Noun
  ["big", "to, lớn"], // Adjective
  ["bike", "xe đạp"], // Noun
  ["bill", "hoá đơn"], // Noun
  ["bird", "con chim"], // Noun
  ["birthday", "sinh nhật"], // Noun
  ["black", "đen"], // Adjective, Noun
  ["blog", "blog"], // Noun
  ["blonde", "tóc vàng"], // Adjective
  ["blue", "xanh dương"], // Adjective, Noun
  ["boat", "thuyền"], // Noun
  ["body", "cơ thể"], // Noun
  ["book", "quyển sách"], // Noun
  ["boot", "giày ống"], // Noun
  ["bored", "chán nản"], // Adjective
  ["boring", "buồn tẻ"], // Adjective
  ["born", "sinh ra"], // Verb
  ["both", "cả hai"], // Determiner, Pronoun
  ["bottle", "chai, lọ"], // Noun
  ["box", "hộp, thùng"], // Noun
  ["boy", "cậu bé, con trai"], // Noun
  ["boyfriend", "bạn trai"], // Noun
  ["bread", "bánh mì"], // Noun
  ["break", "nghỉ, gián đoạn, đập vỡ"], // Verb, Noun
  ["breakfast", "bữa sáng"], // Noun
  ["bring", "mang lại, cầm lại"], // Verb
  ["brother", "anh trai, em trai"], // Noun
  ["brown", "màu nâu"], // Adjective, Noun
  ["build", "xây dựng, vóc người"], // Verb
  ["building", "tòa nhà, công trình xây dựng"], // Noun
  ["bus", "xe buýt"], // Noun
  ["business", "kinh doanh, doanh nghiệp"], // Noun
  ["busy", "bận rộn"], // Adjective
  ["but", "nhưng"], // Conjunction
  ["butter", "bơ"], // Noun
  ["buy", "mua"], // Verb
  ["by", "bởi, bên cạnh, theo"], // Preposition
  ["bye", "tạm biệt"], // Interjection
  ["cafe", "quán cà phê"], // Noun
  ["cake", "bánh ngọt"], // Noun
  ["call", "gọi, cuộc gọi"], // Verb, Noun
  ["camera", "máy ảnh"], // Noun
  ["can", "có thể"], // Modal Verb
  ["cannot", "không thể"], // Modal verb
  ["capital", "thủ đô, vốn"], // Noun, Adjective
  ["car", "xe ô tô"], // Noun
  ["card", "thẻ, thiệp"], // Noun
  ["career", "nghề nghiệp"], // Noun
  ["carrot", "cà rốt"], // Noun
  ["carry", "mang, vác"], // Verb
  ["cat", "con mèo"], // Noun
  ["CD", "đĩa CD"], // Noun
  ["cent", "xu, phần trăm"], // Noun
  ["centre", "trung tâm"], // Noun
  ["century", "thế kỷ"], // Noun
  ["chair", "cái ghế"], // Noun
  ["change", "thay đổi, tiền thối"], // Verb, Noun
  ["chart", "biểu đồ"], // Noun
  ["cheap", "rẻ"], // Adjective
  ["check", "kiểm tra, séc"], // Verb, Noun
  ["cheese", "phô mai"], // Noun
  ["chicken", "gà, thịt gà"], // Noun
  ["child", "đứa trẻ"], // Noun
  ["chocolate", "sô cô la"], // Noun
  ["choose", "chọn lựa"], // Verb
  ["cinema", "rạp chiếu phim"], // Noun
  ["city", "thành phố"], // Noun
  ["class", "lớp học, hạng"], // Noun
  ["classroom", "phòng học"], // Noun
  ["clean", "sạch, lau chùi"], // Adjective, Verb
  ["climb", "leo trèo"], // Verb
  ["clock", "đồng hồ"], // Noun
  ["close", "đóng, gần"], // Verb, Adjective
  ["clothes", "quần áo"],
  ["club", "câu lạc bộ"], // Noun
  ["coat", "áo khoác"], // Noun
  ["coffee", "cà phê"], // Noun
  ["cold", "lạnh"], // Adjective, Noun
  ["college", "trường đại học"], // Noun
  ["colour", "màu sắc"], // Noun
  ["come", "đến"], // Verb
  ["common", "phổ biến"], // Adjective
  ["company", "công ty"], // Noun
  ["compare", "so sánh"], // Verb
  ["complete", "hoàn thành, đầy đủ"], // Adjective, Verb
  ["computer", "máy tính"], // Noun
  ["concert", "buổi hòa nhạc"], // Noun
  ["conversation", "cuộc trò chuyện"], // Noun
  ["cook", "nấu ăn"], // Verb
  ["cooking", "việc nấu ăn"], // Noun
  ["cool", "mát mẻ, ngầu"], // Adjective
  ["correct", "đúng, sửa chữa"], // Adjective, Verb
  ["cost", "giá cả, chi phí"], // Noun, Verb
  ["could", "có thể (quá khứ của can)"], // Modal Verb
  ["country", "quốc gia, đất nước"], // Noun
  ["course", "khóa học, tuyến đường"], // Noun
  ["cousin", "anh chị em họ"], // Noun
  ["cow", "con bò"], // Noun
  ["cream", "kem (sữa), kem (trang điểm)"], // Noun
  ["create", "tạo ra"], // Verb
  ["culture", "văn hóa"], // Noun
  ["cup", "tách, cốc"], // Noun
  ["customer", "khách hàng"], // Noun
  ["cut", "cắt, vết cắt"], // Verb, Noun
  ["dad", "bố"], // Noun
  ["dance", "nhảy, khiêu vũ"], // Verb, Noun
  ["dancer", "vũ công"], // Noun
  ["dancing", "sự khiêu vũ"], // Noun
  ["dangerous", "nguy hiểm"], // Adjective
  ["dark", "tối, đen"], // Adjective
  ["date", "ngày, quả chà là"], // Noun
  ["daughter", "con gái"], // Noun
  ["day", "ngày"], // Noun
  ["dear", "thân yêu, kính mến"], // Adjective
  ["December", "tháng Mười Hai"], // Noun
  ["decide", "quyết định"], // Verb
  ["delicious", "ngon"], // Adjective
  ["describe", "miêu tả"], // Verb
  ["description", "sự miêu tả"], // Noun
  ["design", "thiết kế"], // Noun, Verb
  ["desk", "bàn làm việc"], // Noun
  ["detail", "chi tiết"], // Noun
  ["dialogue", "đối thoại"], // Noun
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
  ["it", "nó"], // Pronoun
  ["its", "của nó"], // Determiner
  ["jacket", "áo khoác"], // Noun
  ["January", "tháng một"], // Noun
  ["jeans", "quần jeans"], // Noun
  ["job", "công việc"], // Noun
  ["join", "tham gia"], // Verb
  ["journey", "chuyến đi"], // Noun
  ["juice", "nước ép"], // Noun
  ["July", "tháng bảy"], // Noun
  ["June", "tháng sáu"], // Noun
  ["just", "vừa, chỉ"], // Adverb
  ["keep", "giữ"], // Verb
  ["key", "chìa khóa, quan trọng"], // Noun, Adjective
  ["kilometre", "kilômét"], // Noun
  ["kind (type)", "loại, kiểu"], // Noun
  ["kitchen", "nhà bếp"], // Noun
  ["know", "biết"], // Verb
  ["land", "đất, vùng đất"], // Noun
  ["language", "ngôn ngữ"], // Noun
  ["large", "lớn"], // Adjective
  ["last1 (final)", "cuối cùng"], // Determiner
  ["late", "muộn, trễ"], // Adjective, Adverb
  ["later", "sau đó"], // Adverb
  ["laugh", "cười"], // Verb, Noun
  ["learn", "học"], // Verb
  ["leave", "rời đi, để lại"], // Verb
  ["left", "bên trái, rời đi"], // Adjective, Adverb, Noun
  ["leg", "chân"], // Noun
  ["lesson", "bài học"], // Noun
  ["let", "cho phép"], // Verb
  ["letter", "chữ cái, thư"], // Noun
  ["library", "thư viện"], // Noun
  ["lie1", "nằm, nói dối"], // Verb
  ["life", "cuộc sống"], // Noun
  ["light (from the sun/a lamp)", "ánh sáng"], // Noun, Adjective
  ["like (similar)", "giống"], // Preposition
  ["like (find sb/sth pleasant)", "thích"], // Verb
  ["line", "dòng, tuyến"], // Noun
  ["lion", "sư tử"], // Noun
  ["list", "danh sách"], // Noun, Verb
  ["listen", "lắng nghe"], // Verb
  ["little", "nhỏ"], // Adjective, Determiner, Pronoun
  ["live1", "sống"], // Verb
  ["local", "địa phương"], // Adjective
  ["long1", "dài, lâu"], // Adjective, Adverb
  ["look", "nhìn"], // Verb
  ["lose", "mất"], // Verb
  ["lot", "nhiều, một đống"], // Pronoun, Determiner, Adverb
  ["love", "yêu, tình yêu"], // Noun, Verb
  ["lunch", "bữa trưa"], // Noun
  ["machine", "máy móc"], // Noun
  ["magazine", "tạp chí"], // Noun
  ["main", "chính"], // Adjective
  ["make", "làm"], // Verb
  ["man", "người đàn ông"], // Noun
  ["many", "nhiều"], // Determiner, Pronoun
  ["map", "bản đồ"], // Noun
  ["March", "tháng Ba"], // Noun
  ["market", "chợ, thị trường"], // Noun
  ["married", "kết hôn"], // Adjective
  ["match (contest/correspond)", "trận đấu, phù hợp"], // Noun, Verb
  ["May", "tháng Năm"], // Noun
  ["maybe", "có lẽ"], // Adverb
  ["me", "tôi"], // Pronoun
  ["meal", "bữa ăn"], // Noun
  ["mean", "nghĩa là, có ý định"], // Verb
  ["meaning", "ý nghĩa"], // Noun
  ["meat", "thịt"], // Noun
  ["meet", "gặp"], // Verb
  ["meeting", "cuộc họp"], // Noun
  ["member", "thành viên"], // Noun
  ["menu", "thực đơn"], // Noun
  ["message", "tin nhắn"], // Noun
  ["metre", "mét"], // Noun
  ["midnight", "nửa đêm"], // Noun
  ["mile", "dặm"], // Noun
  ["milk", "sữa"], // Noun
  ["million", "triệu"], // Number
  ["minute1", "phút"], // Noun
  ["miss", "nhớ, lỡ"], // Verb
  ["mistake", "sai lầm"], // Noun
  ["model", "mô hình, người mẫu"], // Noun
  ["modern", "hiện đại"], // Adjective
  ["moment", "thời điểm, khoảnh khắc"], // Noun
  ["Monday", "thứ Hai"], // Noun
  ["money", "tiền"], // Noun
  ["month", "tháng"], // Noun
  ["more", "nhiều hơn"], // Determiner, Pronoun, Adverb
  ["morning", "buổi sáng"], // Noun
  ["most", "hầu hết, nhiều nhất"], // Determiner, Pronoun, Adverb
  ["mother", "mẹ"], // Noun
  ["mountain", "núi"], // Noun
  ["mouse", "chuột"], // Noun
  ["mouth", "miệng"], // Noun
  ["move", "di chuyển"], // Verb
  ["movie", "phim"], // Noun
  ["much", "nhiều"], // Determiner, Pronoun, Adverb
  ["mum", "mẹ (thường dùng trong tiếng Anh Anh)"], // Noun
  ["museum", "bảo tàng"], // Noun
  ["music", "âm nhạc"], // Noun
  ["must", "phải, nên (modal verb)"], // Modal Verb
  ["my", "của tôi"], // Determiner
  ["name", "tên, đặt tên"], // Noun, Verb
  ["natural", "tự nhiên"], // Adjective
  ["near", "gần"], // Preposition, Adjective, Adverb
  ["need", "cần"], // Verb
  ["negative", "tiêu cực"], // Adjective
  ["neighbour", "hàng xóm"], // Noun
  ["never", "không bao giờ"], // Adverb
  ["new", "mới"], // Adjective
  ["news", "tin tức"], // Noun
  ["newspaper", "báo"], // Noun
  ["next", "tiếp theo"], // Adjective, Adverb
  ["next to", "bên cạnh"], // Preposition
  ["nice", "tốt, dễ chịu"], // Adjective
  ["night", "ban đêm"], // Noun
  ["nine", "chín"], // Number
  ["nineteen", "mười chín"], // Number
  ["ninety", "chín mươi"], // Number
  ["no", "không"], // Exclamation, Determiner
  ["no one", "không ai"], // Pronoun
  ["nobody", "không ai"], // Pronoun
  ["north", "phía Bắc"], // Noun, Adjective, Adverb
  ["nose", "mũi"], // Noun
  ["not", "không"], // Adverb
  ["note", "ghi chú"], // Noun
  ["nothing", "không có gì"], // Pronoun
  ["November", "tháng Mười một"], // Noun
  ["now", "bây giờ"], // Adverb
  ["number", "số"], // Noun
  ["nurse", "y tá"], // Noun
  ["object", "vật thể, đối tượng"], // Noun
  ["o’clock", "giờ"], // Adverb
  ["October", "tháng Mười"], // Noun
  ["of", "của"], // Preposition
  ["off", "tắt, ra ngoài"], // Adverb, Preposition
  ["office", "văn phòng"], // Noun
  ["often", "thường xuyên"], // Adverb
  ["oh", "ôi"], // Exclamation
  ["OK", "được, ổn"], // Exclamation, Adjective, Adverb
  ["old", "cũ, già"], // Adjective
  ["on", "trên, vào"], // Preposition, Adverb
  ["once", "một lần"], // Adverb
  ["one", "một"], // Number, Determiner, Pronoun
  ["onion", "hành"], // Noun
  ["online", "trực tuyến"], // Adjective, Adverb
  ["only", "chỉ, duy nhất"], // Adjective, Adverb
  ["open", "mở"], // Adjective, Verb
  ["opinion", "ý kiến"], // Noun
  ["opposite", "đối diện, ngược lại"], // Adjective, Noun, Preposition, Adverb
  ["or", "hoặc"], // Conjunction
  ["orange", "cam, quả cam"], // Noun, Adjective
  ["order", "đặt hàng, thứ tự"], // Noun, Verb
  ["other", "khác"], // Adjective, Pronoun
  ["our", "của chúng tôi"], // Determiner
  ["out", "ngoài, ra ngoài"], // Adverb, Preposition
  ["outside", "bên ngoài"], // Adverb
  ["over", "trên, qua"], // Preposition, Adverb
  ["own", "của mình, sở hữu"], // Adjective, Pronoun
  ["page", "trang"], // Noun
  ["paint", "vẽ, sơn"], // Verb, Noun
  ["painting", "bức tranh"], // Noun
  ["pair", "cặp, đôi"], // Noun
  ["paper", "giấy"], // Noun
  ["paragraph", "đoạn văn"], // Noun
  ["parent", "bố mẹ"], // Noun
  ["park", "công viên, đỗ xe"], // Noun, Verb
  ["part", "phần"], // Noun
  ["partner", "đối tác"], // Noun
  ["party", "bữa tiệc"], // Noun
  ["passport", "hộ chiếu"], // Noun
  ["past", "quá khứ, trước đây"], // Adjective, Noun, Preposition
  ["pay", "trả tiền"], // Verb
  ["pen", "bút bi"], // Noun
  ["pencil", "bút chì"], // Noun
  ["people", "con người, mọi người"], // Noun
  ["pepper", "hạt tiêu, ớt"], // Noun
  ["perfect", "hoàn hảo"], // Adjective
  ["period", "khoảng thời gian, dấu chấm"], // Noun
  ["person", "người"], // Noun
  ["personal", "cá nhân"], // Adjective
  ["phone", "điện thoại"], // Noun, Verb
  ["photo", "ảnh"], // Noun
  ["photograph", "bức ảnh"], // Noun
  ["phrase", "cụm từ, câu"], // Noun
  ["piano", "đàn piano"], // Noun
  ["picture", "bức tranh, ảnh"], // Noun
  ["piece", "mảnh, phần"], // Noun
  ["pig", "con lợn"], // Noun
  ["pink", "màu hồng"], // Adjective, Noun
  ["place", "nơi, chỗ"], // Noun
  ["plan", "kế hoạch, lên kế hoạch"], // Noun, Verb
  ["plane", "máy bay"], // Noun
  ["plant", "cây, nhà máy"], // Noun
  ["play", "chơi, vở kịch"], // Verb, Noun
  ["player", "người chơi"], // Noun
  ["please", "làm ơn"], // Exclamation
  ["point", "điểm, chỉ ra"], // Noun
  ["police", "cảnh sát"], // Noun
  ["policeman", "cảnh sát nam"], // Noun
  ["pool", "bể bơi, hồ"], // Noun
  ["poor", "nghèo, tồi"], // Adjective
  ["popular", "phổ biến, nổi tiếng"], // Adjective
  ["positive", "tích cực"], // Adjective
  ["possible", "có thể, khả thi"], // Adjective
  ["post", "bài đăng, gửi thư"], // Noun, Verb
  ["potato", "khoai tây"], // Noun
  ["pound", "đồng bảng Anh, cân (đơn vị)"], // Noun
  ["practice", "thực hành, luyện tập"], // Noun
  ["practise", "thực hành (Anh)"], // Verb
  ["prefer", "thích hơn"], // Verb
  ["prepare", "chuẩn bị"], // Verb
  ["present", "hiện tại, quà tặng"], // Adjective, Noun
  ["pretty", "xinh đẹp, khá"], // Adjective, Adverb
  ["price", "giá cả"], // Noun
  ["probably", "có lẽ"], // Adverb
  ["problem", "vấn đề"], // Noun
  ["product", "sản phẩm"], // Noun
  ["programme", "chương trình (Anh)"], // Noun
  ["project", "dự án"], // Noun
  ["purple", "màu tím"], // Adjective, Noun
  ["put", "đặt, để"], // Verb
  ["quarter", "quý (thời gian), 1/4"], // Noun
  ["question", "câu hỏi"], // Noun
  ["quick", "nhanh"], // Adjective
  ["quickly", "một cách nhanh chóng"], // Adverb
  ["quiet", "yên tĩnh"], // Adjective
  ["quite", "khá, hoàn toàn"], // Adverb
  ["radio", "đài radio"], // Noun
  ["rain", "mưa, mưa rơi"], // Noun, Verb
  ["read", "đọc"], // Verb
  ["reader", "người đọc"], // Noun
  ["reading", "việc đọc"], // Noun
  ["ready", "sẵn sàng"], // Adjective
  ["real", "thực, thật"], // Adjective
  ["really", "thực sự"], // Adverb
  ["reason", "lý do"], // Noun
  ["red", "màu đỏ"], // Adjective, Noun
  ["relax", "thư giãn"], // Verb
  ["remember", "nhớ"], // Verb
  ["repeat", "lặp lại"], // Verb
  ["report", "báo cáo"], // Noun
  ["restaurant", "nhà hàng"], // Noun
  ["result", "kết quả"], // Noun
  ["return", "trở lại, sự trở lại"], // Verb, Noun
  ["rice", "gạo"], // Noun
  ["rich", "giàu có"], // Adjective
  ["ride", "đi xe, cưỡi"], // Verb
  ["right", "đúng, bên phải, quyền lợi"], // Adjective, Adverb, Noun
  ["river", "con sông"], // Noun
  ["road", "con đường"], // Noun
  ["room", "phòng"], // Noun
  ["routine", "thói quen, quy trình"], // Noun
  ["rule", "quy tắc"], // Noun
  ["run", "chạy"], // Verb
  ["sad", "buồn"], // Adjective
  ["salad", "salad"], // Noun
  ["salt", "muối"], // Noun
  ["same", "giống nhau, cùng"], // Adjective, Pronoun, Adverb
  ["sandwich", "bánh sandwich"], // Noun
  ["Saturday", "thứ bảy"], // Noun
  ["say", "nói"], // Verb
  ["school", "trường học"], // Noun
  ["science", "khoa học"], // Noun
  ["scientist", "nhà khoa học"], // Noun
  ["sea", "biển"], // Noun
  ["second", "thứ hai (sau thứ nhất), giây (đơn vị thời gian)"], // Determiner/Number, Noun
  ["section", "mục, phần"], // Noun
  ["see", "thấy"], // Verb
  ["sell", "bán"], // Verb
  ["send", "gửi"], // Verb
  ["sentence", "câu"], // Noun
  ["September", "tháng chín"], // Noun
  ["seven", "bảy"], // Number
  ["seventeen", "mười bảy"], // Number
  ["seventy", "bảy mươi"], // Number
  ["share", "chia sẻ"], // Verb
  ["she", "cô ấy"], // Pronoun
  ["sheep", "cừu"], // Noun
  ["shirt", "áo sơ mi"], // Noun
  ["shoe", "giày"], // Noun
  ["shop", "cửa hàng, mua sắm"], // Noun, Verb
  ["shopping", "mua sắm"], // Noun
  ["short", "ngắn, thấp"], // Adjective
  ["should", "nên"], // Modal Verb
  ["show", "hiển thị, chương trình, buổi biểu diễn"], // Verb, Noun
  ["shower", "vòi sen, tắm"], // Noun
  ["sick", "ốm"], // Adjective
  ["similar", "tương tự"], // Adjective
  ["sing", "hát"], // Verb
  ["singer", "ca sĩ"], // Noun
  ["sister", "chị, em gái"], // Noun
  ["sit", "ngồi"], // Verb
  ["situation", "tình huống"], // Noun
  ["six", "sáu"], // Number
  ["sixteen", "mười sáu"], // Number
  ["sixty", "sáu mươi"], // Number
  ["skill", "kỹ năng"], // Noun
  ["skirt", "váy"], // Noun
  ["sleep", "ngủ"], // Verb
  ["slow", "chậm"], // Adjective
  ["small", "nhỏ"], // Adjective
  ["snake", "rắn"], // Noun
  ["snow", "tuyết, rơi tuyết"], // Noun, Verb
  ["so", "vì vậy, rất"], // Adverb, Conjunction
  ["some", "một số"], // Determiner, Pronoun
  ["somebody", "ai đó"], // Pronoun
  ["someone", "ai đó"], // Pronoun
  ["something", "một cái gì đó"], // Pronoun
  ["sometimes", "thỉnh thoảng"], // Adverb
  ["son", "con trai"], // Noun
  ["song", "bài hát"], // Noun
  ["soon", "sớm"], // Adverb
  ["sorry", "xin lỗi, tiếc"], // Adjective, Exclamation
  ["sound", "âm thanh, nghe"], // Noun, Verb
  ["soup", "súp"], // Noun
  ["south", "phía nam, miền nam"], // Noun, Adjective, Adverb
  ["space", "không gian"], // Noun
  ["speak", "nói"], // Verb
  ["special", "đặc biệt"], // Adjective
  ["spell", "đánh vần"], // Verb
  ["spelling", "cách đánh vần"], // Noun
  ["spend", "chi tiêu, tiêu tốn"], // Verb
  ["sport", "thể thao"], // Noun
  ["spring", "mùa xuân, lò xo"], // Noun
  ["stand", "đứng"], // Verb
  ["star", "ngôi sao"], // Noun
  ["start", "bắt đầu"], // Verb
  ["statement", "tuyên bố"], // Noun
  ["station", "trạm"], // Noun
  ["stay", "ở lại"], // Verb
  ["still", "vẫn, vẫn còn"], // Adverb
  ["stop", "dừng, điểm dừng"], // Verb, Noun
  ["story", "câu chuyện"], // Noun
  ["street", "phố"], // Noun
  ["strong", "mạnh mẽ"], // Adjective
  ["student", "học sinh, sinh viên"], // Noun
  ["study", "học, nghiên cứu"], // Noun, Verb
  ["style", "phong cách"], // Noun
  ["subject", "môn học, chủ đề"], // Noun
  ["success", "thành công"], // Noun
  ["sugar", "đường"], // Noun
  ["summer", "mùa hè"], // Noun
  ["sun", "mặt trời"], // Noun
  ["Sunday", "chủ nhật"], // Noun
  ["supermarket", "siêu thị"], // Noun
  ["sure", "chắc chắn"], // Adjective
  ["sweater", "áo len"], // Noun
  ["swim", "bơi"], // Verb
  ["swimming", "môn bơi, sự bơi lội"], // Noun
  ["table", "bàn"], // Noun
  ["take", "lấy, cầm"], // Verb
  ["talk", "nói chuyện"], // Verb
  ["tall", "cao"], // Adjective
  ["taxi", "taxi"], // Noun
  ["tea", "trà"], // Noun
  ["teach", "dạy"], // Verb
  ["teacher", "giáo viên"], // Noun
  ["team", "đội"], // Noun
  ["teenager", "thanh thiếu niên"], // Noun
  ["telephone", "điện thoại"], // Noun, Verb
  ["television", "ti vi"], // Noun
  ["tell", "nói, kể"], // Verb
  ["ten", "mười"], // Number
  ["tennis", "quần vợt"], // Noun
  ["terrible", "khủng khiếp"], // Adjective
  ["test", "bài kiểm tra"], // Noun, Verb
  ["text", "văn bản"], // Noun
  ["than", "hơn"], // Conjunction
  ["thank", "cảm ơn"], // Verb
  ["thanks", "cảm ơn"], // Exclamation, Noun
  ["that", "đó, cái đó, mà"], // Determiner, Pronoun, Conjunction
  ["the", "cái, con (mạo từ xác định)"], // Definite article
  ["theatre", "nhà hát"], // Noun
  ["their", "của họ"], // Determiner
  ["them", "họ"], // Pronoun
  ["then", "sau đó"], // Adverb
  ["there", "ở đó"], // Adverb
  ["they", "họ"], // Pronoun
  ["thing", "đồ vật, thứ"], // Noun
  ["think", "nghĩ"], // Verb
  ["third", "thứ ba"], // Number
  ["thirsty", "khát nước"], // Adjective
  ["thirteen", "mười ba"], // Number
  ["thirty", "ba mươi"], // Number
  ["this", "cái này, đây"], // Determiner, Pronoun
  ["thousand", "nghìn"], // Number
  ["three", "ba"], // Number
  ["through", "thông qua"], // Preposition, Adverb
  ["Thursday", "thứ năm"], // Noun
  ["ticket", "vé"], // Noun
  ["time", "thời gian"], // Noun
  ["tired", "mệt mỏi"], // Adjective
  ["title", "tiêu đề"], // Noun
  ["to", "đến, để"], // Preposition, Infinitive marker
  ["today", "hôm nay"], // Adverb, Noun
  ["together", "cùng nhau"], // Adverb
  ["toilet", "nhà vệ sinh"], // Noun
  ["tomato", "cà chua"], // Noun
  ["tomorrow", "ngày mai"], // Adverb, Noun
  ["tonight", "tối nay"], // Adverb, Noun
  ["too", "quá, cũng"], // Adverb
  ["tooth", "răng"], // Noun
  ["topic", "chủ đề"], // Noun
  ["tourist", "du khách"], // Noun
  ["town", "thị trấn"], // Noun
  ["traffic", "giao thông"], // Noun
  ["train", "tàu, xe lửa"], // Noun
  ["travel", "du lịch"], // Verb, Noun
  ["tree", "cây"], // Noun
  ["trip", "chuyến đi"], // Noun
  ["trousers", "quần dài"], // Noun
  ["true", "đúng, thật"], // Adjective
  ["try", "thử"], // Verb
  ["T-shirt", "áo phông"], // Noun
  ["Tuesday", "thứ ba"], // Noun
  ["turn", "quay, xoay, lượt"], // Verb, Noun
  ["TV", "tivi"], // Noun
  ["twelve", "mười hai"], // Number
  ["twenty", "hai mươi"], // Number
  ["twice", "hai lần"], // Adverb
  ["two", "hai"], // Number
  ["type", "loại"], // Noun
  ["umbrella", "dù"], // Noun
  ["uncle", "chú, bác, cậu"], // Noun
  ["under", "dưới"], // Preposition, Adverb
  ["understand", "hiểu"], // Verb
  ["university", "đại học"], // Noun
  ["until", "cho đến khi"], // Conjunction, Preposition
  ["up", "lên, hướng lên"], // Adverb, Preposition
  ["upstairs", "tầng trên"], // Adverb
  ["us", "chúng tôi, chúng ta"], // Pronoun
  ["use", "dùng, sử dụng"], // Verb
  ["useful", "hữu ích"], // Adjective
  ["usually", "thường xuyên"], // Adverb
  ["vacation", "kỳ nghỉ"], // Noun
  ["vegetable", "rau củ"], // Noun
  ["very", "rất"], // Adverb
  ["video", "video"], // Noun
  ["village", "làng"], // Noun
  ["visit", "thăm, chuyến thăm"], // Verb, Noun
  ["visitor", "khách tham quan"], // Noun
  ["wait", "chờ"], // Verb
  ["waiter", "bồi bàn"], // Noun
  ["wake", "thức dậy"], // Verb
  ["walk", "đi bộ, cuộc đi bộ"], // Verb, Noun
  ["wall", "tường"], // Noun
  ["want", "muốn"], // Verb
  ["warm", "ấm áp"], // Adjective
  ["wash", "rửa, giặt"], // Verb
  ["watch", "xem, đồng hồ đeo tay"], // Verb, Noun
  ["water", "nước"], // Noun
  ["way", "đường, cách"], // Noun
  ["we", "chúng tôi, chúng ta"], // Pronoun
  ["wear", "mặc, đội"], // Verb
  ["weather", "thời tiết"], // Noun
  ["website", "trang web"], // Noun
  ["Wednesday", "thứ tư"], // Noun
  ["week", "tuần"], // Noun
  ["weekend", "cuối tuần"], // Noun
  ["welcome", "chào đón, hoan nghênh"], // Exclamation, Verb, Adjective
  ["well", "tốt, khỏe, giỏi"], // Adverb, Adjective, Exclamation
  ["west", "phía tây"], // Noun, Adjective, Adverb
  ["what", "gì, cái gì"], // Pronoun/Determiner
  ["when", "khi nào, lúc nào"], // Adverb, Pronoun, Conjunction
  ["where", "ở đâu, nơi nào"], // Adverb, Conjunction
  ["which", "cái nào, nào"], // Pronoun/Determiner
  ["white", "trắng"], // Adjective, Noun
  ["who", "ai"], // Pronoun
  ["why", "tại sao"], // Adverb
  ["wife", "vợ"], // Noun
  ["will", "sẽ"], // Modal Verb
  ["win", "thắng"], // Verb
  ["window", "cửa sổ"], // Noun
  ["wine", "rượu vang"], // Noun
  ["winter", "mùa đông"], // Noun
  ["with", "với"], // Preposition
  ["without", "không có"], // Preposition
  ["woman", "người phụ nữ"], // Noun
  ["wonderful", "tuyệt vời"], // Adjective
  ["word", "từ, lời"], // Noun
  ["work", "làm việc, công việc"], // Verb, Noun
  ["worker", "công nhân, người lao động"], // Noun
  ["world", "thế giới"], // Noun
  ["would", "sẽ (quá khứ của will)"], // Modal Verb
  ["write", "viết"], // Verb
  ["writer", "nhà văn, người viết"], // Noun
  ["writing", "việc viết, bài viết"], // Noun
  ["wrong", "sai, không đúng"], // Adjective
  ["yeah", "ừ, vâng"], // Exclamation
  ["year", "năm"], // Noun
  ["yellow", "màu vàng"], // Adjective, Noun
  ["yes", "vâng, có"], // Exclamation
  ["yesterday", "hôm qua"], // Adverb, Noun
  ["you", "bạn, các bạn"], // Pronoun
  ["young", "trẻ, trẻ tuổi"], // Adjective
  ["your", "của bạn"], // Determiner
  ["yourself", "bản thân bạn"], // Pronoun
]);