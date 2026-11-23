var __chunkGraphs;
var __chunkSeen;
var __chunkNonce;
var __preload = (id, seenOnly) => {
  for (var [base, graph, ids] of __chunkGraphs || [])
    for (var stack = [id], g = globalThis, d = g.document, head, j, node, k, link;j = stack.pop(); )
      if (!__chunkSeen[j] && (node = graph[j])) {
        __chunkSeen[j] = 1;
        for (k = 1;k < node.length; k++)
          stack.push(ids[node[k]]);
        if (!seenOnly && j !== id && (head = d && d.head)) {
          if (__chunkNonce === undefined)
            __chunkNonce = (k = d.querySelector("meta[property=csp-nonce]")) && (k.nonce || k.getAttribute("nonce")) || "";
          link = d.createElement("link");
          link.rel = "modulepreload";
          link.crossOrigin = "";
          if (__chunkNonce)
            link.nonce = __chunkNonce;
          link.href = new g.URL(node[0], base);
          head.appendChild(link);
        }
      }
};
var __chunks = (base, ids, nodes, entry) => {
  for (var graph = {}, i = 0;i < ids.length; i++)
    graph[ids[i]] = nodes[i];
  (__chunkGraphs ||= []).push([base, graph, ids]);
  __chunkSeen ||= {};
  __preload(ids[entry], 1);
};

// src/shared/deep.js
function log(msg, extra) {
  console.log("[shared/deep]", msg, extra === undefined ? "" : extra);
}

// src/lib-a/alpha.js
var id = "lib-a/alpha";
function alpha() {
  return id;
}

export { __preload, __chunks, log, alpha };
