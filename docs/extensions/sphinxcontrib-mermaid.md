# sphinxcontrib-mermaid

Sphinx extension that allows you to embed Mermaid graphs in your documents.

- **Documentation**: https://sphinxcontrib-mermaid-demo.readthedocs.io/
- **Source Code**: https://github.com/mgaitan/sphinxcontrib-mermaid

## Example

:::{mermaid}
  sequenceDiagram
      participant Alice
      participant Bob
      Alice->John: Hello John, how are you?
      loop Healthcheck
          John->John: Fight against hypochondria
      end
      Note right of John: Rational thoughts <br/>prevail...
      John-->Alice: Great!
      John->Bob: How about you?
      Bob-->John: Jolly good!
:::
