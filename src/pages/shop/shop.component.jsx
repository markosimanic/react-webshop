import React from 'react'
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';
import { connect } from 'react-redux'
import  WithSpinner from '../../components/with-spinner/with-spinner.component'

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import { createStructuredSelector} from 'reselect'
import { selectIsCollectionFetching} from '../../redux/shop/shop.selectors'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props
        fetchCollectionsStartAsync()
    }

    render() {
        const { match, isCollectionFetching } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionsPageWithSpinner isLoading={isCollectionFetching} {...props} />} />
            </div>
        )
    }
}


const mapStateToProps = createStructuredSelector ({
    isCollectionFetching : selectIsCollectionFetching
})


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync : () => dispatch(fetchCollectionsStartAsync())
});



export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)