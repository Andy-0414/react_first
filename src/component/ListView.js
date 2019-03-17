import React, { Component } from 'react';

class ListView extends Component {
    state = {
        data : [
            {
                name : "이름1",
                num : "010-1234-5678"
            },
            {
                name: "이름2",
                num: "010-1234-5678"
            },
            {
                name: "이름3",
                num: "010-1234-5678"
            }
        ]
    }
    render() {
        const list = this.state.data.map((x,idx)=>(<div key={idx}>{x.name} , {x.num}</div>))
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default ListView;