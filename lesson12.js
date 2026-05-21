/*
https://wc-react-fundamentals.netlify.app/intro
============ REACT: một library ===========
    Xưa là:
    browser gửi HTTP request -> Server build và trả lại HTML    
    ==> Chậm
    ==> đẻ ra: Single-page application
        Chỉ load 1 lần file index.html, nội dung bên trong sẽ được kiểm
        soát bởi file js đi kèm với nó 

        //NextJs/ Angular: một framework nên đầy đủ hơn React
    ==> Mục đích để tạo UI, published by Meta


    3 CORE:
    - Components: sẽ dễ reuse
    - Declarative: mô tả rõ hơn về UI trông thế nào với một
    trạng thái nhất định, React tự tìm cách cập nhật DOM 
    hiệu quả, mà không cần inner HTML chains.
    - Virtual DOM:


    BENEFITS:
    - Thư viện cộng đồng lớn
    - Dùng trong rất nhiều việc


============= JSX: một syntax của Json ==============
Dùng class name, compile bằng cách dùng Js function calls.
Có thể viết tag trong Java Script


============= COMPONENTS: Block code của React tách ra để tái 
sử dụng, có thể truyền vào các props ========================


Components Lifecycle: 
        Mount: vào browser 
        Update: cập nhất nếu có thay đổi
        Unmount: unload khỏi browser

============ STATE: data thuộc về components, có thể thay đổi
theo thời gian (mọi data mình thấy đều là state)
Để biết khi nào UI thay đổi để trigger những thay đổi trên màn hình

=> CHỐT LẠI: Khi muốn UI thay đổi thì không dùng (let, const bthg)
mà dùng useState() để hiển thị UI.

Cách khai báo:
    const [count, hàm set] = useState (0); //gán count = 0


========================= USE EFFECT =================================
Lúc fetch data, set timer, set interval thì trả về thế nào
==> Gọi là side effect.

Use effect: sử dụng khi handle API, side effect

======================= ON_GOING PROJECT =============================
Tạo file - SETUP PROJECT bằng pip:

npm creat vite@latest
->
y

Điền project name: test-project-wc
Select a framework:
React

Select a variant:
JavaScript

Install with npm and start now?
Yes


PROJECT STRUCTURE:
    SRC: 
        APP.JSX: bên trong có function --> nó sẽ return HTML 
        (HTML bên trong function thì gọi là JSX file = 1 COMPONENTS)

        APP.CSS: có thể add vô trong component bằng câu lệnh import

        INDEX.CSS:

        MAIN.JSX: dùng để Render folder

        folder ASSETS: bỏ hình ảnh đồ dô -> IMPORT và ĐẶT TÊN BIẾN (dùng lại bằng cách gọi)
        folder PUBLIC: file icon.svg: cái icon trên đầu tab

//view app: npm run dev

???=============== USE EFFECT TO FETCH API =========================
xem code

???=============== ĐƯA COMPONENT VÀO CODE =====================
Cop cái code return vào function TodoItem -> truyền tham số todo
tạo fuction xong còn phải export để nó đi đâu đó thì đi

Vào file chính <TodoItem todo = {todo}, key = {i}/>

=================== BTVN ======================
Làm đáp ứng:
    Fetch todo lists về,
    Tách each todo to a child components
    Style it properly (index.css, todoItem.css)
    Handle function: add Todo, deleteTodo, updateTodo
    <có thể xài form Components>
    advance: Phân trang (Paginate), state page, search by title
    Display 3 todos on screen min 1024px
    Display 2 todos on screen min 768px
    Display 1 for less than 300px

Tìm hiểu thêm: lúc map một list có nên dùng key là index không, React life cycle

*/