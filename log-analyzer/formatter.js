const formatter = ({ total, counts, errorPercentage, mostRecentError }) => {
  return `
Total Entries: ${total}
INFO: ${counts.INFO}
WARN: ${counts.WARN}
ERROR: ${counts.ERROR}
Error Percentage: ${errorPercentage.toFixed(0)}%
Most Recent Error: ${mostRecentError ? mostRecentError.message : "None"}
  `;
};

module.exports = formatter;
