import React from 'react';
import { css } from '../../../css/components/App.css'
import { Link } from 'react-router-dom';
import Icon from '../../../images/FTlogo.png'

import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #264348',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '& .MuiListItemText-primary': {
            color: theme.palette.common.indigo,
        },
    },
}))(MenuItem);

function fHeader() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <nav className="farmer-header">
            <link rel="stylesheet" href={css} />
            <div className="headline">
                <Link to="/">
                    <img src={Icon} alt="ロゴ" />
                </Link>
            </div>
            <div className="header-link">
                <button
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    variant="contained"
                    className="button-farmer"
                    onClick={handleClick}
                >マイページ
            </button>
                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <StyledMenuItem>
                        <Link to="/">
                            <ListItemText primary="アカウント情報" />
                        </Link>
                    </StyledMenuItem>
                    <StyledMenuItem>
                        <Link to="/">
                            <ListItemText primary="クレジット情報" />
                        </Link>
                    </StyledMenuItem>
                    {/*
                <StyledMenuItem>
                    <Link to="/">
                        <ListItemText primary="売上" />
                    </Link>
                </StyledMenuItem>
                */}
                    <StyledMenuItem>
                        <Link to="/">
                            <ListItemText primary="ログアウト" />
                        </Link>
                    </StyledMenuItem>
                </StyledMenu>
            </div>
        </nav>
    )
}

export default fHeader;