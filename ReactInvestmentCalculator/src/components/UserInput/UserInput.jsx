export default function UserInput({ userInput, onChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <label htmlFor="initinvest">INITIAL INVEST</label>
        <input
          type="number"
          id="initinvest"
          name="initinvest"
          value={userInput.initialInvestment}
          required
          onChange={(е) => {
            onChange("initialInvestment", е.target.value);
          }}
        />
      </div>
      <div className="input-group">
        <label htmlFor="anninvest">ANNUAL INVEST</label>
        <input
          type="number"
          id="anninvest"
          name="anninvest"
          value={userInput.annualInvestment}
          required
          onChange={(е) => {
            onChange("annualInvestment", е.target.value);
          }}
        />
      </div>
      <div className="input-group">
        <label htmlFor="expectedreturn">EXPECTED RETURN</label>
        <input
          type="number"
          id="expectedreturn"
          name="expectedreturn"
          value={userInput.expectedReturn}
          required
          onChange={(е) => {
            onChange("expectedReturn", е.target.value);
          }}
        />
      </div>
      <div className="input-group">
        <label htmlFor="duration">Duration</label>
        <input
          type="number"
          id="duration"
          name="duration"
          value={userInput.duration}
          required
          onChange={(е) => {
            onChange("duration", е.target.value);
          }}
        />
      </div>
    </div>
  );
}
