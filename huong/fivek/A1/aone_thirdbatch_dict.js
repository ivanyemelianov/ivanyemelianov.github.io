const dict = new Map([
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
])