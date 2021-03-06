export function validCuit(cuit) {
        cuit = cuit.toString();
        if(cuit.length != 11) {
            return false;
        }
 
        var acumulado   = 0;
        var digitos     = cuit.split("");
        var digito      = digitos.pop();
 
        for(var i = 0; i < digitos.length; i++) {
            acumulado += digitos[9 - i] * (2 + (i % 6));
        }
 
        var verif = 11 - (acumulado % 11);
        if(verif == 11) {
            verif = 0;
        } else if(verif == 10) {
            verif = 9;
        }
 
        return digito == verif;
}