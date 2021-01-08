import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Image from '../../images/sellerjoin.jpg'
import Ykoukoku from '../../images/Ykoukoku.jpg'
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 500,
        margin: 40,
        maxWidth: 500,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

function Top() {
    const [goods, setGoods] = useState([]);

    useEffect(() => {
        getGoods();
    }, [])

    const getGoods = async () => {
        const response = await axios.get('/api/goods');
        setGoods(response.data.goods)
    }

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    const handleClick2 = () => {
        setOpen(!open);
    };

    return (
        <nav className="general-top">
            <p className="top-font">農家の新規登録、会員の方はこちらから☟</p>
            <div className="photos ">
                <Link to="/farmTop"><img className="item2" src={Image} alt="画像" /></Link>
            </div>
            <div className="top-layout">
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            一覧から探す
                            </ListSubheader>
                    }
                    className={classes.root}
                >
                    <ListItem button onClick={handleClick}>
                        <ListItemText primary="生産者から探す" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="みかん農園" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem button onClick={handleClick2}>
                        <ListItemText primary="カテゴリーから探す" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="野菜" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="果物" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="加工食品" />
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <ListItemText primary="穀物" />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
                <div className="top-item-list">
                    <h3>商品一覧</h3>
                    {goods.map(good => (
                        good.state == true ? (
                        <a href={`/products/${good.id}`} key={good.id}>
                            <img src="../../images/tomato.jpg" alt="トマトの画像" />
                        </a>  
                        ):(null)
                    ))}
                    <Link to="/products">
                        <img src="../../images/asparagus.jpg" alt="アスパラガスの画像" />
                    </Link>
                </div>
            </div>
            <img className="koukoku" src={Ykoukoku} alt="横長広告" height="85" /><br /><br />
        </nav>
    )
}

export default Top;