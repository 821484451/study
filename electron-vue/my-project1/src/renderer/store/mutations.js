const mutations = {
	updateLoadingStatus(state, data){
		state.isLoading = data.isLoading
	},
	updateSocket(state, data) {
		state.Socket = data
	}
}

export default mutations