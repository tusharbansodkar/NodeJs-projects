const analyzer = (logData) => {
  // Implementation for analyzing log data

  const totalEntries = logData.length;

  const counts = {
    INFO: 0,
    WARN: 0,
    ERROR: 0,
  };

  let mostRecentError = null;

  logData.forEach((entry) => {
    if (Object.hasOwn(counts, entry.level)) {
      counts[entry.level]++;
    }
    if (entry.level === "ERROR") {
      mostRecentError = entry;
    }
  });

  return {
    total: totalEntries,
    counts: {
      INFO: counts.INFO,
      WARN: counts.WARN,
      ERROR: counts.ERROR,
    },
    errorPercentage:
      totalEntries === 0 ? 0 : (counts.ERROR / totalEntries) * 100,
    mostRecentError: mostRecentError,
  };
};

module.exports = analyzer;
