/*
===== Asynchronous JavaScript =====

    ** JavaScript là ngôn ngữ đồng bộ nhưng xử lý bất đồng bộ (ở Event loop)

    ** JavaScript là Single-thread: tại một thời điểm chỉ thực hiện được một task/ hành động 
    (vd gọi API thì phải phụ thuộc nhiều thứ như tốc độ mạng khác biệt)
        Nếu thời gian chờ (refresh) quá lâu thì nó browser sẽ xác định là
        chửa response -> browser crash

    ** Event loop: dùng để xử lý các tasks bất đồng bộ, nhận, push vào 
    call stack (cái nào làm được liền)=> marcotask queue (timers, I/O, UI events, API)
    => microtask queue (promise, await)=> Render step (browser render ra màn hình) 
    (phân phối tùy tác vụ)

    vì Js sẽ thực thi hàm từ trên xuống dưới => cần Event Loop: nó sẽ cho vào các
    thằng ở trên theo thứ tự ưu tiên và thực hiện chúng theo thứ tự đó (VD console
    .log ở trong các dòng lệnh khác nhau).

    >>> Xem thêm ở: Event Loop Visuallizer

===== Callbacks: Power and Pain ======
    Coi lại về functions
    
    *** Promise: HỨA là viết hàm này cứ để đó cho nó chạy, sucess thì .then(),
    không thì .catch(), finally() như bên try-catch. <<Vẫn liên quan tới Event loop>>
    
            vd:*/
            //Event loop
            fetchUser(id)
                .then((user) => fetchAccount(user.id))
                .then ((accounts) => calculateSummary(accounts))
                .then((summary) => renderSummary(summary))
                .catch((err) => showToast(err.mesage))
                .finally(() => hideSpinner());


            //Viet binh thuong
            const user = fetchUser(id);//1s
            const acc = fetchAccounts(user.id);//2s
            const summary = calculateSummary(acc);//2s
            const result = renderSummary(summary); //0.5s

            //call stack task
            print(); //0.01 => event loop bien tu 5.5s thanh 0.01s

        /*
        
 ** Khi commit -> capture snapshot lại hết những thay đổi () -> () -> ()

** Async/ Await ==> Giản lược hơn cách viết promise
    //async/ await
    */async function load (id) {
        try {
            const u = await fetchUser (id);
            // Nếu không có await sẽ đi luôn á, 
            // thằng nào ngắn làm trước
            const a = await fetchAccounts (u.id);
            render (a);
        }
        catch (e) {
            handleError(e);
        }
    }
/*
        !!!Note: await ở trong scope async, await sẽ tìm async gần nhất
        để chờ scope đó.

    ** Promise Combinators (gom tất cả lại vì input output không liên quan tới nhau)
        *** Promise.all: tất cả phải thành công chứ không nó crash liền (thời gian thực
         thi bằng thằng lâu nhất) <hay dùng trong prj thật>
        *** Promise.allSettled: không cần tất cả đều thành công (cứ gọi hết, thgian y chang), nếu 1 cái crack thì
        nó sẽ vẫn chạy mấy thằng còn lại.
        *** Promise.race: thằng nào thành công sớm nhất là promise xong
        *** Promise.any: 
            ==> thất bại thì return error

    ** Parallel Loop Pattern (Recommended)
    */
        const ids = [1,2,3];
        const promises = ids.map(id) => fetchById(id);
        const results = await Promise.all(promises);// tại 3 thằng giống nhau =)) 
        //mà thật ra là tùy trường hợp
        console.log(results);//output preserves input index order
    /*

    *** Nên có một lớp Ở GIỮA, BAO LẠI bắt lỗi - để DEBUG - ERROR HANDLING STRATEGY
==== ASYNC/ AWAIT SINH RA KHÔNG THAY THẾ CHO PROMISES, NÓ CHỈ DỄ ĐỌC HƠN THUI CHỨ NHƯ NHAU

            
        
        


 */