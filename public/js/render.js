var socket = io();
socket.on('drive_data', function(data){
    console.log(data)
    ReactDOM.render(
        <CommentBox data={data}/>,
        document.getElementById('content')
    );
})

var CommentBox = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function (file) {
            return (
                <li>
                    <h2>{file.title}</h2>
                    <p>{file.downloadUrl}</p>
                    <img src={file.iconLink} alt="pic"/>
                    <p><a href={file.webContentLink}>download</a></p>
                    <p><a href={file.alternateLink}>open</a></p>
                </li>
            );
        });
        return (
            <ul className="fileList">
                {commentNodes}
            </ul>
        );
    }
});