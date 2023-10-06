import { Assalariado } from "./model/Assalariado"
import { Comissionado } from "./model/Comissionado";
import { Horista } from "./model/Horista"

const a1 = new Assalariado(`Miroslav Klose`,`201420142014`, 1500);

a1.setNome(`Wesley Sneijder`);
a1.setCpf(`707070707070`);
a1.setSalario(2500);
console.log(`Nome: ${a1.getNome()}, CPF: ${a1.getCpf()}`);
console.log(`Salário: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);

const c1 = new Comissionado (`Slipknot`, `661661661`, 4000, 0.10);
c1.setNome(`Stratovarius`);
c1.setCpf(`791432217121`);
c1.setTotalVendas(3200);
c1.setTaxaComissao(0.09);
console.log(`Nome: ${c1.getNome()}, CPF: ${c1.getCpf()}`);
console.log(`Comissão: ${c1.getTaxaComissao()}, Total Vendas: ${c1.getTotalVendas()}`);
console.log(`Vencimento: ${c1.vencimento()}`);

const h1 = new Horista (`Adam`, `993993993`, 4000, 47);
h1.setNome(`Lucas`);
h1.setCpf(`345345345`);
h1.setValorHora(1500);
h1.setHorasTrabalhadas(24);
console.log(`Nome: ${h1.getNome()}, CPF: ${h1.getCpf()}`);
console.log(`Valor Hora: ${h1.getValorHora()}, Horas Trabalhadas: ${h1.getHorasTrabalhadas()}`);
console.log(`Vencimento: ${h1.vencimento()}`);