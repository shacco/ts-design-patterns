interface IDialog {
    createButton: Function;
    render: Function;
}
interface IButton {
    render: Function;
}

//Abstract class
class Dialog implements IDialog{
    createButton():IButton{}
    render(){
        const okButton = this.createButton()
        okButton.render()
    }
}


//Concrete creators
class WindowsDialog extends Dialog{
    createButton():IButton{
        return new WindowsButton();
    }
}
class WebDialog extends Dialog{
    createButton():IButton{
        return new WebButton();
    }
}


//Concrete Products
class WindowsButton implements IButton{
    render():string{
        return 'WindowsButton'
    }
}

class WebButton implements IButton{
    render():string{
        return 'WebButton'
    }
}






class InterfazX{
    const dialogWindow = new WindowsDialog()
    const webDialog = new WebDialog()

    if(){

    }
}
