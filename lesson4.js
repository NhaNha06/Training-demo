//BIG O (ĐI SƯƠNG SƯƠNG)
//Kí hiệu đo độ phức tạp của một bài toán - thể hiện số thao tác cần cho một thuật toán
/*------ O(1): khi truy cập không tiêu tốn tài nguyên (gán, nhân, cộng, ..., truy cập trực tiêp theo index)
            vd trong array: address = first_address + (index * size_of_one_item) + mảng là các vùng nhớ liền kề nhau
             -> vị trí đầu tiên của địa chỉ cho đối tượng đó

            omega()- chặn dưới
            O() - chặn trên
            (học lại độ phức tạp của MAD =))
            ?????? 10n với 100n, tại sao trong KHMT lại k qtam tới hệ số đó??? tại sao ->> TÌM HIỂU (x2, x3, x100 zị đó)

/------- O(log n):
        ????logarit để làm gì, tại sao lại tạo ra: 
        Liên quan đến nhân chia một hệ cơ số, trong KHMT log luôn là hệ số 2.
        Khi nhân/ chia cùng một hệ cơ số số n thì là độ phức tạp O(log n)
        Vd trong thuật toán, mà dính đến nhân/ chia/ cắt ở bước nhảy n thì là O(log n)

        //BÀI TẬP: TÌM PHẦN TỬ LẶP TRONG MẢNG O(N) MÀ KHÔNG DÙNG CẤU TRÚC DỮ LIỆU NÀO (ĐỀ TRONG NHÓM)


/------- O(n log n): trong loop có chia đôi

/------- O(n^2): nested loop (2 vòng lặp lồng nhau)

/------- O(2^n)

*/