import "./CharacterSelect.css";

function CharacterSelect() {
    return (
        <div className="App">
            <header className="App-header">
                <h2>Choose Your Character</h2>
            </header>
            <div className="App-body">
                <table className="table-main">
                    <tr>
                        <th>Character Name</th>
                        <th>Background</th>
                        <th>Level</th>
                        <th>Select</th>
                    </tr>
                    <tr>
                        <td>New Character</td>
                        <td>Undecided</td>
                        <td>0</td>
                        <td>
                            <button>Create</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default CharacterSelect;
