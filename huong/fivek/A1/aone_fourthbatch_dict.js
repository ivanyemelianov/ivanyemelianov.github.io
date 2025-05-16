const dict = Map([
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
])