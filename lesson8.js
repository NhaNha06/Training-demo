/* ===== VARIABLES SCOPE =====
    Scope is determined by where a function is written, not where it is called
    reference error- gọi một thằng không tồn tại trong scope

    Cách khai báo:
        var: có temporal dead zone (vùng chết tạm thời) - chiếm một phần bộ nhớ
            Temporal Dead Zone (TDZ) là khoảng thời gian trong JavaScript, đặc biệt 
            là trong phiên bản ES6, khi một biến đã được "hoisted" (kéo lên đầu phạm vi)
            nhưng chưa được khởi tạo
        let: được redeclar/ re-assign
        const: không được re-assign
        const a = [1]; a[0] = 2; => được nha vì const nó lưu địa chỉ
    //?????? ĐỌC LẠI CÁI BẢNG TRONG NHÓM
        

    == Lexical Scope & Scope Chain ==
    Scope chain: là nhiều scope lồng vào nhau
    Lexical Scope: inner scope có thể truy cập vào các biến outter
        
    /// MẤU CHỐT -> Trong JavaScript, nó khai báo trước hết rồi mới execute (kiểu gọi hàm như bthg, gán sau) - gọi là Hoisting


    //============= FUNCTION =====================
    function TÊN HÀM (THAM SỐ) {
        //BODY
        RETURN STATEMENT;
    }

    VD: 
    const validateAmount = function(amt) {
        return amt > 0;
    };
    const func = validateAmount(2); //Này là gán vào biến khác
    console.log(validateAmount(2)); //In hẳn giá trị ra


    //==== ARROW FUNCTIONS ====
    Một cách viết tắt (dùng mũi tên)
    vd: 
    const transactions = [100, -50, 200, -30];
    const total = transactions.filter(t => t > 0).map(t => t * 2)

    Giải thích: cái .map(t => t * 2) mà viết thành .map{t => t * 2} => nó sẽ trả về mảng rỗng á, vì thiếu câu return
    

    //==== DEFAULT + REST PARAMETERS ====
    vd:  


    //=== DESTRUCTURING + SPREAD =====
    Có thể truyền vào tham số là một object/ struct luôn. Để khỏi bị nhầm thứ tự parameters.
    vd: 
    function createAccount ({owner, type = 'saving}, balance = 0}) 
    {
        return {owner, type, balance};
    }  
    const account = createAccount({type : 'a', owner: 'abc'});
    const updated = {... account, balance: 5000};    
    
    const {balance} = updated; 
        ==> cái này gọi là destructuring (tương tự gọi updated.balance)
    const {balance, type, owner} = updated; --> lấy ra được hết mấy thằng trong updated


    //==== HIGHER-ORDER FUNCTIONS ====
    Accept functions as input or return functions to compose behavior.

    vd: txs.filter(t => t.amount > 0) //filter array chứa object, return những object có thằng có amount > 0;

    vd XỊN- ĐỌC HIỂU LÀ HIỂU:
    const withRate = rate => amount => amount * rate;
`   
    //diễn giải ra
    const withRate = (rate) => {
        return(amount) => amount * rate;    
    }
    //gọi và truyền tham số
    console.log(withRate(2)(3))

    LƯU Ý: Viết hàm thì dù có trả gì cũng nên return vì lỡ merge thì phần đằng sau của ngta cũng k chạy=))
    Nên dùng const, let thì khi nào cần thay đổi. Function nên bắt đầu bằng động từ, biến thì danh từ
    Do not use var in new code, đừng phụ thuộc vào hoisting.
    Không viết function quá dài.
    Đừng đặt tên quá chung chung cho hàm

    //BÀI TẬP 
    ĐỌC LẠI NGHIÊN CỨU BÀI
    VỀ TÌM HIỂU ASYNC/ AWAIT (TUẦN SAU)

    làm bài tập
    
    
*/

