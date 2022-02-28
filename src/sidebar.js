module.exports = {
  docs: [
    'welcome',
    {
      type: 'category',
      label: 'Guides',
      link: {
        type: 'doc',
        id: 'guides/index'
      },
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'First Steps with Ory',
          items: [
            {
              type: 'category',
              label: 'Protect a Page or Screen with Login',
              link: {
                type: 'doc',
                id: 'guides/protect-page-login'
              },
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'guides/protect-page-login'
                }
              ]
            },
            'start-building/native-mobile-app',
            'guides/ory-cli-install-use',
            'guides/create-personal-access-token',
            'start-building/other-languages'
          ]
        },
        {
          type: 'category',
          label: 'Using the Ory Console',
          items: [
            {
              type: 'autogenerated',
              dirName: 'guides/console'
            }
          ]
        },
        {
          type: 'category',
          label: 'Customizing Ory',
          items: [
            'guides/custom-domains',
            'guides/bring-your-user-interface',
            'guides/customize-identity-schema',
            'start-building/single-page-app-spa'
          ]
        },
        {
          type: 'category',
          label: 'Going to Production',
          items: ['start-building/deploy-auth-production', 'guides/proxy']
        }
      ]
    },
    {
      Concepts: [
        'concepts/terminology',
        'concepts/project',
        'concepts/project-invite-membership',
        'concepts/managed-ui',
        'concepts/identity',
        'concepts/services-api',
        'concepts/personal-access-token',
        'concepts/self-service',
        'concepts/redirects',
        'concepts/session',
        'concepts/emails',
        'ecosystem/api-design',
        'concepts/password-policy'
      ]
    },    
    {
      'Contributing & Open Source': [
        'open-source',
        'ecosystem/contributing',
        'ecosystem/community',
        'ecosystem/projects',
        'ecosystem/versioning',
        'ecosystem/configuring',
        'ecosystem/deployment',
        'ecosystem/upgrading',
        'ecosystem/logging',
        'ecosystem/sqa',
        'ecosystem/security',
        'ecosystem/roadmap',
        'ecosystem/software-architecture-philosophy',
        {
          'Documentation Styleguide': [
            'ecosystem/styleguide/styleguide',
            'ecosystem/styleguide/testing',
            'ecosystem/styleguide/templates'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Identity Management (Ory Kratos)',
      items: [
        {
          Introduction: [
            'kratos/index',
            'kratos/quickstart',
            'kratos/install',
            'kratos/configuring',
            'kratos/contributing'
          ]
        },
        {
          Concepts: [
            'kratos/concepts/index',
            'kratos/concepts/terminology',
            'kratos/concepts/session',
            'kratos/concepts/ui-user-interface',
            'kratos/concepts/management-ui',
            'kratos/concepts/identity-schema',
            {
              label: 'Identity Credentials',
              type: 'category',
              items: [
                'kratos/concepts/credentials',
                'kratos/concepts/credentials/username-email-password',
                'kratos/concepts/credentials/openid-connect-oidc-oauth2',
                'kratos/concepts/credentials/lookup-secrets',
                'kratos/concepts/credentials/totp',
                'kratos/concepts/credentials/webauthn'
              ]
            },
            'kratos/concepts/browser-redirect-flow-completion',
            'kratos/concepts/email-sms',
            'kratos/concepts/rest-api',
            'kratos/concepts/federation',
            'kratos/concepts/security'
          ]
        },
        {
          'Self Service (End-User)': [
            'kratos/self-service',
            'kratos/self-service/flows/user-registration',
            'kratos/self-service/flows/user-login',
            'kratos/self-service/flows/user-settings',
            'kratos/self-service/flows/account-recovery',
            'kratos/self-service/flows/verify-email-account-activation',
            'kratos/self-service/flows/user-logout',
            'kratos/self-service/flows/user-facing-errors',
            'kratos/self-service/flows/2fa-mfa-multi-factor-authentication',
            'kratos/self-service/hooks'
          ]
        },
        {
          Administration: ['kratos/admin/managing-users-identities']
        },
        {
          Guides: [
            'kratos/guides/two-factor-authentication-2fa-mfa',
            'kratos/guides/sign-in-with-github-google-facebook-linkedin',
            'kratos/guides/login-session',
            'kratos/guides/configuring-cookies',
            'kratos/guides/multi-domain-cookies',
            'kratos/guides/setting-up-cors',
            'kratos/guides/password-policy',
            'kratos/guides/account-recovery-password-reset',
            'kratos/guides/account-activation-email-verification',
            'kratos/guides/zero-trust-iap-proxy-identity-access-proxy',
            'kratos/guides/multi-tenancy-multitenant',
            'kratos/guides/secret-key-rotation',
            'kratos/guides/retrieve-social-sign-in-access-refresh-id-token',
            'kratos/guides/setting-up-noop-cipher-parameters',
            'kratos/guides/setting-up-xchacha-cipher-parameters',
            'kratos/guides/setting-up-aes-cipher-parameters',
            'kratos/guides/high-availability-ha',
            'kratos/guides/docker',
            'kratos/guides/https-tls',
            'kratos/guides/setting-up-password-hashing-parameters',
            'kratos/guides/integration-with-other-systems-using-web-hooks',
            'kratos/guides/tracing',
            'kratos/guides/upgrade',
            'kratos/guides/password-policy'
          ]
        },
        'kratos/reference/api',
        {
          Reference: [
            'kratos/reference/configuration',
            'kratos/reference/configuration-editor',
            'kratos/reference/json-schema-json-paths',
            'kratos/reference/html-forms',
            {
              'Command Line Interface (CLI)': [
                {
                  type: 'autogenerated',
                  dirName: 'kratos/cli'
                }
              ]
            }
          ]
        },
        {
          'Debug & Help': [
            'kratos/debug/troubleshooting',
            'kratos/debug/csrf',
            'kratos/debug/performance-out-of-memory-password-hashing-argon2',
            'kratos/debug/debug-docker-delve-ory-kratos'
          ]
        },
        {
          'Further Reading': [
            'kratos/further-reading/comparison',
            'kratos/further-reading/kratos-video-tutorials'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'OAuth2 & OpenID Connect (Ory Hydra)',
      items: [
        {
          Introduction: [
            'hydra/index',
            'hydra/5min-tutorial',
            'hydra/install',
            'hydra/contributing'
          ]
        },
        {
          Concepts: [
            'hydra/concepts/before-oauth2',
            'hydra/concepts/oauth2',
            'hydra/concepts/openid-connect-oidc',
            'hydra/concepts/login',
            'hydra/concepts/consent',
            'hydra/concepts/logout',
            'hydra/jwks',
            'hydra/limitations'
          ]
        },
        {
          Guides: [
            {
              type: 'category',
              label: 'Implementing the User Interface',
              items: [
                'hydra/guides/login',
                'hydra/guides/consent',
                'hydra/guides/logout'
              ]
            },
            {
              type: 'category',
              label: 'Operations',
              items: [
                'hydra/configure-deploy',
                'hydra/dependencies-environment',
                'hydra/production',
                'hydra/guides/tracing',
                'hydra/guides/hsm-support',
                'hydra/guides/secrets-key-rotation',
                'hydra/guides/kubernetes-helm-chart',
                'hydra/guides/ssl-https-tls',
                'hydra/guides/cookies',
                'hydra/guides/scaling-hydra',
                'hydra/guides/cors',
                'hydra/guides/gitlab',
                'hydra/guides/migrating-from-mitreid',
                'hydra/guides/merge-multiple-db-secrets'
              ]
            },
            {
              type: 'category',
              label: 'OAuth2 & OpenID Connect',
              items: [
                'hydra/advanced',
                'hydra/guides/openid-connect-dynamic-client-registration',
                'hydra/guides/oauth2-clients',
                'hydra/guides/oauth2-grant-type-jwt-bearer',
                'hydra/guides/common-oauth2-openid-connect-flows',
                'hydra/guides/using-oauth2',
                'hydra/guides/token-expiration',
                'hydra/guides/oauth2-token-introspection',
                'hydra/guides/oauth2-public-spa-mobile'
              ]
            }
          ]
        },
        'hydra/reference/api',
        {
          Reference: [
            'hydra/reference/configuration',
            'hydra/reference/configuration-editor',
            {
              'Command Line Interface (CLI)': [
                {
                  type: 'autogenerated',
                  dirName: 'hydra/cli'
                }
              ]
            }
          ]
        },
        {
          'Debug & Help': [
            'hydra/debug',
            'hydra/debug/csrf',
            'hydra/debug/config',
            'hydra/debug/token-endpoint-auth-method',
            'hydra/debug/logout',
            'hydra/faq'
          ]
        },
        {
          SDKs: ['hydra/sdk', 'hydra/sdk/go', 'hydra/sdk/js', 'hydra/sdk/php']
        },
        {
          Development: ['hydra/milestones']
        },
        {
          'Further Reading': [
            'hydra/case-study',
            'hydra/benchmark',
            'hydra/security-architecture'
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Permissions & Access Control (Ory Keto)',
      items: [
        {
          Introduction: [
            'keto/index',
            'keto/install',
            'keto/implemented-planned-features',
            'keto/performance',
            'keto/quickstart'
          ]
        },
        {
          Concepts: [
            'keto/concepts/relation-tuples',
            'keto/concepts/namespaces',
            'keto/concepts/objects',
            'keto/concepts/subjects',
            'keto/concepts/graph-of-relations',
            'keto/concepts/api-overview',
            'keto/concepts/internal-algorithms',
            'keto/concepts/snaptokens-evaluation-consistency'
          ]
        },
        {
          Guides: [
            'keto/secure',
            'keto/guides/simple-access-check-guide',
            'keto/guides/list-api-display-objects',
            'keto/guides/expand-api-display-who-has-access',
            'keto/guides/production',
            'keto/guides/v0.7-migration',
            'keto/guides/rbac',
            'keto/guides/access-control-inheritance',
            'keto/guides/access-control-list-design-best-practices'
          ]
        },
        {
          Examples: ['keto/examples/olymp-file-sharing']
        },
        {
          Reference: [
            'keto/reference/configuration',
            'keto/reference/configuration-editor',
            'keto/reference/rest-api',
            'keto/reference/proto-api',
            {
              'Command Line Interface (CLI)': [
                {
                  type: 'autogenerated',
                  dirName: 'keto/cli'
                }
              ]
            }
          ]
        },
        {
          SDKs: ['keto/sdk/index']
        },
        {
          label: 'Changelog',
          href: 'https://github.com/ory/keto/blob/master/CHANGELOG.md',
          type: 'link'
        }
      ]
    },
    {
      type: 'category',
      label: 'Zero Trust Proxy (Ory Oathkeeper)',
      items: [
        {
          Introduction: [
            'oathkeeper/index',
            'oathkeeper/install',
            'oathkeeper/contributing'
          ]
        },
        {
          'Core Concepts': [
            'oathkeeper/api-access-rules',
            {
              type: 'category',
              label: 'Handlers',
              items: [
                'oathkeeper/pipeline',
                'oathkeeper/pipeline/authn',
                'oathkeeper/pipeline/authz',
                'oathkeeper/pipeline/mutator',
                'oathkeeper/pipeline/error'
              ]
            }
          ]
        },
        {
          Guides: [
            'oathkeeper/configure-deploy',
            'oathkeeper/guides/traefik-proxy-integration'
          ]
        },
        'oathkeeper/reference/api',
        {
          label: 'Changelog',
          href: 'https://github.com/ory/oathkeeper/blob/master/CHANGELOG.md',
          type: 'link'
        },
        {
          Reference: [
            'oathkeeper/reference/configuration',
            'oathkeeper/reference/configuration-editor',
            {
              'Command Line Interface (CLI)': [
                {
                  type: 'autogenerated',
                  dirName: 'oathkeeper/cli'
                }
              ]
            }
          ]
        },
        {
          SDKs: ['oathkeeper/sdk']
        }
      ]
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: [
        'reference/api',
        {
          'Command Line Interface (CLI)': [
            {
              type: 'autogenerated',
              dirName: 'cli'
            }
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Further Reading',
      items: ['cloud/developer', 'cloud/cloud-roadmap']
    }
  ]
}
