const root = document.getElementById('root');

class ToDoApp extends React.Component{
    constructor(props){
        super(props);

        this.state={
            newItem:"",
            list:[]
        }
    }

    deleteItem(id){
        const list = [...this.state.list];
        const updatedlist = list.filter(item => item.id !== id);
        this.setState({
            list: updatedlist
        });
    }

    updateInput(key, value){
        this.setState({
            [key]:value
        })
    }

    addItem(){
        const newItem={
            id: 1+ Math.random(),
            value: this.state.newItem.slice()
        };
        const list = [...this.state.list];
        list.push(newItem);
        
        this.setState({
            list,
            newItem:""
        })
    }

    render(){
        return(
            <div className="app">
                <div>
                    <h1>TO DO LIST</h1>
                    <input type="text" placeholder="add a to do" 
                    value={this.state.newItem} 
                    onChange={e=>this.updateInput("newItem", e.target.value)}/>
                    <button type="onSubmit" onClick={() => this.addItem()}>+</button>
                </div>
                <br/>
                <ol>
                    {this.state.list.map(item => {
                        return(
                            <li key={item.id}>
                                {item.value}
                                <button onClick={() => this.deleteItem(item.id)}>X</button>
                            </li>
                        )
                    })}
                </ol>
            </div>
        );
    }
}

const publicTemp = 
    <div>
        <ToDoApp />
    </div>

ReactDOM.render(publicTemp,root); 