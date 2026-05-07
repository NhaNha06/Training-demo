/**=======TESTING===== 
 * 
 * Mindset: 5W1H- ứng dụng trong testing thế nào?
 * Critical thinking- để khám phá vấn đề ở mọi góc cạnh 
  
  
 * Loan application - SE observation

 *//* Chỉ nên đặt câu hỏi đơn, focus vào nghiệp vụ phần mềm chứ không phải quá trình,
 // tập trung vào vấn đề, càng cụ thể càng tốt (scope bao trùm vấn đề), 
 // nhưng trước tiên phải xác định actor và xác định ngữ cảnh (use case) trước*//*
        
        ví dụ:
            * What-  quỹ vay sẽ là bao nhiêu/ có hình thức vay nào/ giá trị khác biệt là gì/ what is the 
            key visual of the app/ đơn vị vay là gì
            * Why - why we need to test the CIC (credit point) of the customer/ Why we need to validate 
            the customer/ khoản vay or nghiên cứu luật liên quan/ những features này giải quyết vấn đề gì
            * Who - who are the stakeholders/ who can we contact if having problems/ who have which role?
            * When- khi nào việc cho vay kết thúc (kết thúc qui trình)
            * Where - where is the scope of usage? Where should the meetings be held?/ What flatform 
            * should the app build on? Where is data storage?
            * How - How to promote/marketing for this application/ how to testing to meet the User 
            * requirements/ how to recongnize customers' types.

    Mục đích: để sản phẩm hoàn thiện đúng với requirements, test quaility của requirements 
    (không chỉ sản phẩm làm ra mà nằm ở các giai đoạn làm ra sp)

    --Static testing: reviewing code and documents without execution (chỉ đọc, hoặc test khi showcase)
    --Dynamic testing: need to execute code

    Tầm quan trọng: tìm ra lỗi sớm, giảm thiểu rủi ro và ngân sách, đảm bảo phần mềm đáp ứng yêu cầu
    của người dùng, xây dựng tính tin cậy của chất lượng phần mềm.

----- 7 quy tắc testing --------- do tổ chức ISTQB đưa ra
    1 - 7. Kiểm thử để ra lỗi và sửa (defects) - Không có sản phẩm nào là không có lỗi 
    2. Không thể kiểm thử hết toàn bộ tất cả - test boundaries các thứ
    3. Testing sớm (static testing vô cùng quan trọng)
    4. Tập trung sửa lỗi những module tập trung lỗi quan trọng 
    5. Pesticide paradox - không được quá tập trung vào một nhóm test case (80 vấn đề/20 thời gian).
    6. Testing is context dependent- test cases phải phụ thuộc vào bối cảnh của hệ thống- phải chính xác (context).


---- Quaility assurance: left-shifting (dời qui trình, test sớm), right-shifting (production, deploy, nên khó)

---- 5 Activties in testing---- viết test case cũng như viết code, nó có qui tắc maintainable
        1. Planning and Control
        2. Analysis and Design
        3. Implementation and Execution
        4. Evaluating Exit Criteria and Reporting (=== Exit criteria ~ Expected output, 
                                                kiểu như có 100 mà mới 80 pass thì có được không?
                                                ==> Ghi nhận kết quả thực thi và review lại những 
                                                test case quan trọng, 20 cái còn lại coi nó có case qtrong nào k)
        5. Test Closure Activities (rút kinh nghiệm, note "lesson learned")

=======> Muốn automate một test case thì phải: xác định test case có automate được không ==>  viết script

 */
