import { Pipe, PipeTransform } from '@angular/core';
import { Bouteille } from 'src/app/components/pipe/bouteille.model';

@Pipe({
  name: 'bouteille'
})
export class BouteillePipe implements PipeTransform {

  transform(value: Bouteille): string {
    return 'Bouteille de marque '+ value.marque + '('+value.capacite+'cl)';
  }

}
