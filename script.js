function validation() {
    var user = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confpassword').value;
    var namalengkap = document.getElementById('namalengkap').value;
    var tahunlulus = document.getElementById('tahunlulusid').value;
    var alamat = document.getElementById('alamat').value;
    var alasan = document.getElementById('alasan').value;

    var userRGX = /^[a-zA-Z0-9]{6,10}$/i;
    var passwordRGX = /^[a-zA-Z0-9]{6,20}$/i;
    var namalengkapRGX = /^[a-zA-Z ]{0,25}$/i;
    var tahunlulusRGX = /^[0-9]{0,4}$/;
    var alamatRGX = /^[a-zA-Z0-9 ]{0,50}$/i;
    var alasanRGX = /^[a-zA-Z]{50,256}$/i;


    if ( user == ""){
        document.getElementById('usernames').innerHTML = alert("username tidak boleh kosong");
        return validation;
    }
    if (( user.length <= 6) || (user.length >= 10)){
        document.getElementById('usernames').innerHTML = alert("6-10 karakter");
        return validation;
    }
    if (!isNaN(user)){
        document.getElementById('usernames').innerHTML = alert("tidak boleh angka");
        return validation;
    }
    

    if ( password == ""){
        document.getElementById('passwords').innerHTML = alert("password tidak boleh kosong");
        return validation;
    }
    if (( password.length == 0) || (password.length >= 6)){
      document.getElementById('passwords').innerHTML = alert("6 huruf atau angka");
      return validation;
    }
    if ( password!=confirmpassword){
    document.getElementById('confpasswords').innerHTML = alert("password tidak cocok");
    return validation;
    }

    if ( confirmpassword == ""){
        document.getElementById('confpasswords').innerHTML = alert("confirm password tidak boleh kosong");
        return validation;
    }

    if ( namalengkap == ""){
        document.getElementById('namalengkaps').innerHTML = ("nama lengkap tidak boleh kosong");
        return validation;
    }if (namalengkap.length >= 25){
      document.getElementById('namalengkaps').innerHTML = ("max 25 karakter");
      return validation;
    }
    if (!isNaN(namalengkap)){
      document.getElementById('namalengkaps').innerHTML = ("tidak boleh angka");
      return validation;
    }

    if ( tahunlulus == ""){
        document.getElementById('tahunlulusids').innerHTML = "tahun lulus tidak boleh kosong";
        return validation;
    }

    if ( alamat == ""){
        document.getElementById('alamats').innerHTML = "alamat tidak boleh kosong";
        return validation;
    }

    if ( alasan == ""){
        document.getElementById('alasans').innerHTML = "alasan tidak boleh kosong";
        return validation;
    }
    
}
