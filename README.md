##  Demo Url:-
https://rohit3230.github.io/angular9-Things-For-Website/


##  All importent things for make a website like:-

1. Implement popup opening by sending vallue form component to popup and popup to component.
2. Implememt code for input/output decorators.
3. Implement code for Integrating https api binding with observable.
4. Implement code for multiple moduel  integration on behalf of routing for lazy load functionality.
5. Implement code for writing service with get/set methods.
6. Implement code for proper code structuring for webapp.



##  **********************************************************************************
##            SOME INFO. ABOUT FUNCTIOALITY INTREGATING
##  **********************************************************************************

##  Steps for add alert popup code:-

Install 
npm install --save @ng-bootstrap/ng-bootstrap

if getting error during build then can run this command.
ng add @angular/localize

code for module file:-
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';    // put it into import

code for component:-
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


component classs code:-
closeResult: string;
  constructor( 
                private router: Router,
                private todoService:TodoService,
                private modalService: NgbModal
               ) {  }

    open(content) {
      debugger;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      debugger;
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      debugger;
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

*******************************************
##  angularcli commands:-

Add new service:-
ng generate service services/httpService 

add new component:-
ng generate component components/tournamentList

add new module with routing:-
ng generate module components/tournament-list --routing     // module name: TournamentListModule      // routing file name:  TournamentListRoutingModule

*******************************************

## Deploy code on git pages
Step 1:-
ng build --prod --output-path docs --base-href https://rohit3230.github.io/angular9-Things-For-Website/

Step 2:-
check docs folder created or not. like dist folder.

Step 3:-
ngh --dir=docs