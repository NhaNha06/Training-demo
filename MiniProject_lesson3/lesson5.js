/*======DSA
//------Data Structure: cách tổ chức dữ liệu trong máy tính phục vụ (cách xếp đồ)
//------Thuật toán: qui trình gồm từng bước hữu hạn để tìm ra cách giải 
         một bài toán cụ thể, có kết quả trong một thời gian hữu hạn (cách sử dụng)
---------- Toán học: nghiên cứu 
            Data --> Structure data --> Solve by algorithm
---------- Lý do phải học; 
            Biết cách trade of memory and speed: memory lớn aka nhiều tiền, speed nhanh.
            Là ngôn ngữ chung để engineers giao tiếp về cách giải quyết vấn đề.


            == ARRAY: Là một danh sách/ khối (bộ nhớ) liền kề có thứ tự (được đánh số - index). Truy cập ngay lập tức và 
            trực tiếp được đến bất kì vị trí nào nếu có index.
                Có Push. Pop (at the end) = O(1);

            === LINKED-LIST - lịch sử trình duyệt, playlist
            Node: chứa thông tin
            Link/ Pointer: địa chỉ node tiếp theo

            === Stack (LIFO)
            Push: thêm
            Pop: xóa

            === Queue (FIFO)
            EnQueue: thêm
            DeQueue: xóa
            ??? Truyền message: MQ, Kafka (tìm hiểu tool hoạt động thế nào)
            API cũng là Queue

            === Hash Table: lưu dữ liệu theo dạng key-value
            Hash function: chạy song song lưu key
            Collision: --> dùng linked list hoặc tìm vị trí mới

            Get by key O(1)
            Insert, delete O(1)
            Search by value O(n)

*==== ALGORITHM
    "Không phải mọi bài toán đều có lời giải đúng - vì có thể nó không có trình tự hữu hạn các bước logic nào"
    ???//Halting Problem (dừng): ví dụ là một vấn đề trong đó một thuật toán có thể rơi vào vòng lặp vô hạn
    Chưa tìm ra # Không tồn tại

    1--Vét cạn (Brute Force): thử tất cả mọi cách

    2--Tham lam (Greedy): tìm ra được cách ngắn nhất ở từng bước đi- không quay lại
    nhưng không phải lúc nào cũng cho ra cách tổng quát tối ưu nhất

    3--Chia để trị (Divide & Conquer): thường áp dụng cho bài toán khó


???? Tìm hiểu bubble sort để trình bày
???? Redis Cache - một database dùng hash table

*/

