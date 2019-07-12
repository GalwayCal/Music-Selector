import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'music-selector';

  allCategories: Array<any> = [];
  selectedCategories: Array<any> = [];

  
  allAmvCategories: Array<any> = [];
  selectedAmvCategories: Array<any> = [];

  constructor(private firestore: AngularFirestore) {}

  public ngOnInit(): void {
    console.log(this);
    const collectionReference = this.firestore.firestore.collection('musicLists');
    console.log(collectionReference);
    const sn = collectionReference.get();
    sn.then(response => {
      console.log(response);
      response.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
          this.allCategories.push(doc.data());
      });

    }).catch(err => {
      console.warn('Error!!', err);
    });
  
    console.log(this);
    const amvCollectionReference = this.firestore.firestore.collection('ambientLists');
    console.log(amvCollectionReference);
    const amv = amvCollectionReference.get();
    amv.then(response => {
      console.log(response);
      response.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
          this. allAmvCategories.push(doc.data());
      });

    }).catch(err => {
      console.warn('Error!!', err);
    });
  
  }

  public onFilterChange(filter: any): void {
    console.log('filter change', filter);
    this.selectedCategories = [];
    const categories = filter.categories;
    for (const category of this.allCategories) {
      if (categories.includes(category.listCategory)) {
        console.log('adding', category.listCategory);
        this.selectedCategories.push(category);
      }
    }
      console.log('filter change', filter);
      this.selectedAmvCategories = [];
      const amvCategories = filter.amvCategories;
      for (const amvCategory of this.allAmvCategories) {
        if (amvCategories.includes(amvCategory.ambientCategory)) {
         console.log('adding', amvCategory.ambientCategory);
        this.selectedAmvCategories.push(amvCategory);
    }


  }
}
}


