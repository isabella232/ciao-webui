import colors from "./colors";
import ordinal from "./ordinal";

var colors20b = colors("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6");

export default function() {
  return ordinal().range(colors20b);
}
