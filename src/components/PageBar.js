import React from 'react';
import { TablePagination } from '@material-ui/core';

class PageBar extends React.Component {
    state = { page: 0, rowsPerPage: 10, count: 0, gotCount: false };
    handleChangePage = async (e, newPage) => {
        await this.setState({ page: newPage });
        this.props.onChangePage(newPage);
    }
    handleChangeRowsPerPage = async (e) => {
        this.setState({ rowsPerPage: e.target.value });
        this.props.onChangeRowsPerPage(e.target.value);
    }
    render() {
        return (
            <TablePagination
                id={0}
                component="div"
                count={this.props.count}
                page={this.state.page}
                onPageChange={this.handleChangePage}
                rowsPerPage={this.state.rowsPerPage}
                onRowsPerPageChange={this.handleChangeRowsPerPage}
            />
        )
    }
}

export default PageBar;
