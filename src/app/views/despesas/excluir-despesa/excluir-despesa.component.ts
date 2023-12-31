import { Component, OnInit } from '@angular/core';
import { VisualizarDespesaViewModel } from '../models/visualizar-despesa.view-model';
import { DespesasService } from '../services/despesas.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-despesa',
  templateUrl: './excluir-despesa.component.html',
  styleUrls: ['./excluir-despesa.component.css']
})
export class ExcluirDespesaComponent implements OnInit {
  despesaVM?: VisualizarDespesaViewModel;

  constructor(private despesasService: DespesasService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.despesaVM = this.route.snapshot.data['despesa'];
  }

  gravar(){
    this.despesasService.excluir(this.despesaVM!.id)
      .subscribe(res => { this.router.navigate(['/despesas/listar'])})
      this.toastrService.success(`A despesa ${this.despesaVM?.descricao} foi excluída com sucesso!`, 'Sucesso')
  }
}
