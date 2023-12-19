const AllJobs = () => {
  return (
    <div className="content-wrapper">
      <div className="content-header row">
        <div className="content-header-left col-md-9 col-12 mb-2">
          <div className="row breadcrumbs-top">
            <div className="col-12">
              <h2 className="content-header-title float-start mb-0">
                Layout Full
              </h2>
              <div className="breadcrumb-wrapper">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Layouts</a>
                  </li>
                  <li className="breadcrumb-item active">Layout Full</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="content-header-right text-md-end col-md-3 col-12 d-md-block d-none">
          <div className="mb-1 breadcrumb-right">
            <div className="dropdown">
              <button
                className="btn-icon btn btn-primary btn-round btn-sm dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i data-feather="grid"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <a className="dropdown-item" href="#">
                  <i className="me-1" data-feather="check-square"></i>
                  <span className="align-middle">Todo</span>
                </a>
                <a className="dropdown-item" href="#">
                  <i className="me-1" data-feather="message-square"></i>
                  <span className="align-middle">Chat</span>
                </a>
                <a className="dropdown-item" href="#">
                  <i className="me-1" data-feather="mail"></i>
                  <span className="align-middle">Email</span>
                </a>
                <a className="dropdown-item" href="#">
                  <i className="me-1" data-feather="calendar"></i>
                  <span className="align-middle">Calendar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-body">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-primary" role="alert">
              <div className="alert-body">
                <strong>Info:</strong> Please check the&nbsp;
                <a
                  className="text-primary"
                  href="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation/documentation-layout-full.html"
                  target="_blank"
                >
                  Layout full documentation
                </a>
                &nbsp; for more details.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllJobs;
