// navbar
$(function nvabar(){
  $("#navbar").load("../America-main/common/navbar.html", function() {
    // 這裡的程式碼將在內容加載完成後執行
    $(".on_processing").click(function() {
      $('#modal_state').modal('show');
    });
  });
});

$(function footer(){
  $("#footer").load("../America-main/common/footer.html");
});


// 獲取模態視窗元素
var modal = document.getElementById("myModal");

// 獲取打開模態視窗的按鈕元素
var btn = document.getElementById("myBtn");

// 獲取關閉按鈕元素
var span = document.getElementsByClassName("close")[0];

// 當用戶點擊按鈕，打開模態視窗
btn.onclick = function() {
  modal.style.display = "block";
}

// 當用戶點擊關閉按鈕，關閉模態視窗
span.onclick = function() {
  modal.style.display = "none";
}

