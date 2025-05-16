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
])