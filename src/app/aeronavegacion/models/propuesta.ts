import * as _moment from 'moment';
const moment = _moment;
export class Propuesta {
    p_o_cotizacion: string;
    p_o_propuesta: string;
    p_apellido: string;
    p_nombre: string;
    p_ape_nom_rsoc: string;
    p_cod_asegurado: number;
    p_cuit: number;
    p_tipo_persona: string;
    p_iibb: string;
    p_cod_iva: string;
    p_tipo_documento: number;
    p_nro_documento: number;
    p_cod_provincia: number;
    p_actividad: string;
    p_fecha_nacimiento: string;
    p_sexo: string;
    p_nacionalidad: string;
    p_calle: string;
    p_numero: number;
    p_piso: string;
    p_departamento: string;
    p_provincia: number;
    p_localidad: string;
    p_cod_localidad: string;
    p_cod_postal: string;
    p_cod_area: string;
    p_telefono: string;
    p_email: string;
    p_poliza_electronica: string;
    p_vigencia: string;
    p_vigencia_desde: string;
    p_vigencia_hasta: string;
    p_cod_moneda: string;
    p_forma_pago: string;
    cantidad_cuotas: string;
    p_cbu: string;
    p_titular_cbu: string;
    p_titular_tarjeta: string;
    p_banco: string;
    p_cod_tarjeta: string;
    p_tarjeta_credito: string;
    p_vencimiento_tarjeta: string;
    p_tarjeta_aseg: string;
	p_cod_sec: number;
    
	constructor(datos: object){
        this.p_o_cotizacion = datos['o_cotizacion'] || '';
        this.p_o_propuesta = datos['o_propuesta'] || '';
        this.p_apellido = datos['apellido'] || '';
        this.p_nombre = datos['nombre'] || '';
        this.p_ape_nom_rsoc = datos['razon_social'] || '';
        this.p_cod_asegurado = datos['cod_asegurado'] || '';
        this.p_cuit = datos['cuit'] || '';
        this.p_tipo_persona = datos['cod_tipo_persona'] || '';
        this.p_iibb = datos['iibb'] || '';
        this.p_cod_iva = datos['cod_iva'] || '';
        this.p_tipo_documento = datos['cod_tipo_documento'] || '';
        this.p_nro_documento = datos['nro_documento'] || '';
        this.p_cod_provincia = datos['cod_provincia'] || '';
        this.p_actividad = datos['cod_actividad'] || '';
        this.p_fecha_nacimiento = datos['fec_nacimiento'] && moment(datos['fec_nacimiento']).isValid() ? moment(datos['fec_nacimiento']).format('DD/MM/YYYY') : '';
        this.p_sexo = datos['cod_sexo'] || '';
        this.p_nacionalidad = datos['cod_nacionalidad'] || '';
        this.p_calle = datos['domicilio_ase'] || '';
        this.p_numero = datos['nro_puerta'] || '';
        this.p_piso = datos['nro_piso'] || '';
        this.p_departamento = datos['depto'] || '';
        //this.p_provincia = datos['provincia'] || '';
        this.p_cod_localidad = datos['cod_localidad'] && datos['cod_localidad']['sub_cod_postal'] !== '' ? datos['cod_localidad']['sub_cod_postal'] : '';
        this.p_localidad = datos['cod_localidad'] && datos['cod_localidad']['desc_localidad'] ? datos['cod_localidad']['desc_localidad'] : '';
        this.p_cod_postal = datos['cod_postal'] || '';
        this.p_cod_area = datos['cod_area'] || '';
        this.p_telefono = datos['telefono'] || '';
        this.p_email = datos['email'] || '';
        this.p_poliza_electronica = datos['poliza_electronica'] ? 'S' : 'N';
        this.p_vigencia = datos['vigencia'] || 'Anual';
        //this.p_vigencia_desde = moment(datos['vigencia_desde']).format('DD/MM/YYYY') || '';
        //this.p_vigencia_hasta = moment(datos['vigencia_hasta']).format('DD/MM/YYYY') || '';
        this.p_vigencia_desde =  moment().add(1,'days').format('DD/MM/YYYY') || '';
        this.p_vigencia_hasta = moment().add(1,'days').add(1,'years').format('DD/MM/YYYY') || '';
        this.p_cod_moneda = datos['cod_mon'] || '';
        this.p_forma_pago = datos['cod_forma_pago'] || '';
        this.cantidad_cuotas = datos['cantidad_cuotas'] || 0;
        this.p_banco = datos['cod_banco'] || '';;
        this.p_cbu = datos['cbu'] || '';
        this.p_titular_cbu = datos['titular_cbu'] || '';
        
        // si es una tarjeta ya guardada
        this.p_tarjeta_aseg = datos['tarjeta_aseg'] && datos['tarjeta_aseg']['cod_tarjeta_aseg'] ?  datos['tarjeta_aseg']['cod_tarjeta_aseg'] : '';
        this.p_titular_tarjeta = datos['titular_tarjeta'] || '';
        this.p_cod_tarjeta = datos['tipo_tarjeta'] || '';
        this.p_tarjeta_credito = datos['tarjeta_credito'] || '';
        this.p_vencimiento_tarjeta = datos['vencimiento_tarjeta'] || '';
        this.p_cod_sec = 14;
        
    }   
}
