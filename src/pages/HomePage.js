import React from 'react';
import { connect } from 'react-redux';
import LocalizationActions from '../redux/LocalizationRedux';
class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getLocalization();
    }

    componentWillReceiveProps(props) {
        console.log("localization data: ", props.localization.localizationData);
    }
    render() {
        return (
            <div>
                {this.props.localization.localizationData.map(data => (
                    <div key={data.id}>
                        <p>{data.body}</p>
                    </div>
                ))}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getLocalization: () => dispatch(LocalizationActions.getLocalizationRequest())
    }
}

const mapStateToProps = (state) => {
    return {
        localization: state.localization
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)