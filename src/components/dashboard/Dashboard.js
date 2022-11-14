export default function Dashboard(){
    return(
        <div className="container-fluid" id="dash">
            <div className="row">
                <h1 className="text-center">DASHBOARD --CONTROL PANEL</h1>
            </div>
            <div className="row pt-5">
                <div className="col-sm-4">
                <div class="list-group">
  <a href="#" class="list-group-item list-group-item-action">Orders</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-success">Messages</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">Members</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-info">Accepted Orders</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-danger">Rejected Orders</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-warning">Add New News</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-primary">...</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-dark">...</a>
  <a href="#" class="list-group-item list-group-item-action list-group-item-light">...</a>
</div>
                </div>
            </div>
        </div>
    )
}