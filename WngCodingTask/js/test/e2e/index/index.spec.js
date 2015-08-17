/*
 * Numeric Sequence Test - Protractor - using jasmine for spec
 * 
 * describe inside describe indicates more specific tests
 * it > test action
 */


describe( 'hello-protractor', function () {
    browser.ignoreSynchronization = true;

    //Home page tests
    describe( "index", function () {

        var number = element( by.model( 'number' ) );
        var numberBinding = element( by.binding( 'number' ) );  //Cannot find binding inside form
        var calculatebtn = element( by.id( 'calculatebtn' ) );

        var defaultSequence = element.all( by.repeater( 'item in sequences.all' ) );
        var evenSequence = element.all( by.repeater( 'item in sequences.even' ) );
        var oddSequence = element.all( by.repeater( 'item in sequences.odd' ) );

        beforeEach( function () {
            browser.get( '/home/index' );
        } );



        //#1
        it( '#1 correct title', function () {
            expect( browser.getTitle() ).toEqual( 'Home Page' );
        } );

        //#2
        it( '#2 change number and view the output', function () {
            //Locate the number field and enter the number 1000000
            number.sendKeys( '10' );

            //Get binding and check its value
            expect( numberBinding.getText() ).toEqual( '10' );

            numberBinding.getText().then( function ( text ) {
                console.log( 'BINDING output ' + text );
            } );

        } );

        //#3
        it( '#3 should return correct sequences', function () {
            //number.sendKeys( '10' );

            //Calculate sequences
            calculatebtn.click();

            //All numbers sequence
            defaultSequence.then( function ( items ) {
                console.log( 'Default Sequence - ' + items );

                //expect( items[0] ).toEqual( 0 );
            } );

            expect( defaultSequence.count() ).toEqual( 11 );

            //Odd numbers sequence

            //Even numbers sequence

            //Conditional result sequence

            //Fibonacci sequence
        } );
    
    } );

} );







////#0 - Pass
//it( '#0 test initialize', function () {

//} )
//function calculateSequence( number ) {
//    number.sendKeys( '10' );
//}













//var ptor = protractor.getInstance();
//ptor.get( '/#' );


//it( 'should return sequence', function () {

//    // Find the element with ng-model="user" and type "jacksparrow" into it
//    element( by.model( 'number' ) ).sendKeys( '100' );

//    // Find the first (and only) button on the page and click it
//    element( by.css( ':button[type=submit]' ) ).click();

//    // Verify that there are 10 tasks
//    expect( element.all( by.repeater( 'item in sequence.all' ) ).count() ).toEqual( 10 );

//    // Enter 'groceries' into the element with ng-model="filterText"
//    element( by.model( 'filterText' ) ).sendKeys( 'groceries' );

//    // Verify that now there is only one item in the task list
//    expect( element.all( by.repeater( 'task in tasks' ) ).count() ).toEqual( 1 );
//} );
