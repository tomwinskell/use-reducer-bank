type Bank = {
  active: boolean;
  balance: number;
  loan: number;
};

export function reducer(state: Bank, action: { type: string }) {
  if (!state.active) {
    switch (action.type) {
      case 'activate_account': {
        return {
          ...state,
          active: true,
          balance: 500,
          loan: 0,
        };
      }
      default: {
        return state;
      }
    }
  }
  if (state.active) {
    switch (action.type) {
      case 'deactivate_account': {
        {
          return {
            ...state,
            active: false,
          };
        }
      }
      case 'deposit': {
        return {
          ...state,
          balance: state.balance + 100,
        };
      }
      case 'withdraw': {
        return {
          ...state,
          balance: state.balance - 50,
        };
      }
      case 'request_loan': {
        return {
          ...state,
          balance: state.balance + 5000,
          loan: state.loan + 5000,
        };
      }
      case 'repay_loan': {
        if (state.balance > state.loan) {
          return {
            ...state,
            balance: state.balance - state.loan,
            loan: 0,
          };
        }
      }
      default: {
        return state;
      }
    }
  }
  return state;
}
