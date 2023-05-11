const { describe, it, expect } = require('@jest/globals')
const Container = require('./container.js')

const container = new Container({
  Id: '12495bd52ed1c3b607b44796f58e6f11061c65bf4629da6c3086d65eddeead31',
  Created: '2023-05-08T20:15:28.642627803Z',
  Path: 'code-server',
  Args: ['--host', '0.0.0.0'],
  State: {
    Status: 'running',
    Running: true,
    Paused: false,
    Restarting: false,
    OOMKilled: false,
    Dead: false,
    Pid: 30624,
    ExitCode: 0,
    Error: '',
    StartedAt: '2023-05-08T20:15:29.026681368Z',
    FinishedAt: '0001-01-01T00:00:00Z'
  },
  Image:
    'sha256:10532c1076051ee8e1cf5a51b7262b5c97e072b319739ff75e550f9f4560c7e3',
  ResolvConfPath:
    '/var/lib/docker/containers/12495bd52ed1c3b607b44796f58e6f11061c65bf4629da6c3086d65eddeead31/resolv.conf',
  HostnamePath:
    '/var/lib/docker/containers/12495bd52ed1c3b607b44796f58e6f11061c65bf4629da6c3086d65eddeead31/hostname',
  HostsPath:
    '/var/lib/docker/containers/12495bd52ed1c3b607b44796f58e6f11061c65bf4629da6c3086d65eddeead31/hosts',
  LogPath:
    '/var/lib/docker/containers/12495bd52ed1c3b607b44796f58e6f11061c65bf4629da6c3086d65eddeead31/12495bd52ed1c3b607b44796f58e6f11061c65bf4629da6c3086d65eddeead31-json.log',
  Name: '/trinity-sandbox',
  RestartCount: 0,
  Driver: 'overlay2',
  Platform: 'linux',
  MountLabel: '',
  ProcessLabel: '',
  AppArmorProfile: 'docker-default',
  ExecIDs: null,
  HostConfig: {
    Binds: null,
    ContainerIDFile: '',
    LogConfig: { Type: 'json-file', Config: {} },
    NetworkMode: 'default',
    PortBindings: { '8080/tcp': [{ HostIp: '', HostPort: '8000' }] },
    RestartPolicy: { Name: 'no', MaximumRetryCount: 0 },
    AutoRemove: false,
    VolumeDriver: '',
    VolumesFrom: null,
    ConsoleSize: [0, 0],
    CapAdd: null,
    CapDrop: null,
    CgroupnsMode: 'private',
    Dns: [],
    DnsOptions: [],
    DnsSearch: [],
    ExtraHosts: null,
    GroupAdd: null,
    IpcMode: 'private',
    Cgroup: '',
    Links: null,
    OomScoreAdj: 0,
    PidMode: '',
    Privileged: false,
    PublishAllPorts: false,
    ReadonlyRootfs: false,
    SecurityOpt: null,
    UTSMode: '',
    UsernsMode: '',
    ShmSize: 67108864,
    Runtime: 'runc',
    Isolation: '',
    CpuShares: 0,
    Memory: 1073741824,
    NanoCpus: 1000000000,
    CgroupParent: '',
    BlkioWeight: 0,
    BlkioWeightDevice: [],
    BlkioDeviceReadBps: [],
    BlkioDeviceWriteBps: [],
    BlkioDeviceReadIOps: [],
    BlkioDeviceWriteIOps: [],
    CpuPeriod: 0,
    CpuQuota: 0,
    CpuRealtimePeriod: 0,
    CpuRealtimeRuntime: 0,
    CpusetCpus: '',
    CpusetMems: '',
    Devices: [],
    DeviceCgroupRules: null,
    DeviceRequests: null,
    MemoryReservation: 0,
    MemorySwap: 2147483648,
    MemorySwappiness: null,
    OomKillDisable: null,
    PidsLimit: null,
    Ulimits: null,
    CpuCount: 0,
    CpuPercent: 0,
    IOMaximumIOps: 0,
    IOMaximumBandwidth: 0,
    MaskedPaths: [
      '/proc/asound',
      '/proc/acpi',
      '/proc/kcore',
      '/proc/keys',
      '/proc/latency_stats',
      '/proc/timer_list',
      '/proc/timer_stats',
      '/proc/sched_debug',
      '/proc/scsi',
      '/sys/firmware'
    ],
    ReadonlyPaths: [
      '/proc/bus',
      '/proc/fs',
      '/proc/irq',
      '/proc/sys',
      '/proc/sysrq-trigger'
    ]
  },
  GraphDriver: {
    Data: {
      LowerDir:
        '/var/lib/docker/overlay2/e3f7d6a2398afcddbd8b128c034e2e1661d83d1186e9f5cf34d1a924052a799d-init/diff:/var/lib/docker/overlay2/tgv1wx39392hrvyrfntnm5nq7/diff:/var/lib/docker/overlay2/zj31bhhcdvvse8vma78fyhmre/diff:/var/lib/docker/overlay2/yoj216ancq594ru0k6fy1v10o/diff:/var/lib/docker/overlay2/eaootsdau276yu0loofru53u3/diff:/var/lib/docker/overlay2/cb0b7a1e8abe4ba231e105a589622f630f29176ee3d8ffdf1c532058d9b9bda0/diff',
      MergedDir:
        '/var/lib/docker/overlay2/e3f7d6a2398afcddbd8b128c034e2e1661d83d1186e9f5cf34d1a924052a799d/merged',
      UpperDir:
        '/var/lib/docker/overlay2/e3f7d6a2398afcddbd8b128c034e2e1661d83d1186e9f5cf34d1a924052a799d/diff',
      WorkDir:
        '/var/lib/docker/overlay2/e3f7d6a2398afcddbd8b128c034e2e1661d83d1186e9f5cf34d1a924052a799d/work'
    },
    Name: 'overlay2'
  },
  Mounts: [],
  Config: {
    Hostname: 'trinity',
    Domainname: '',
    User: '',
    AttachStdin: false,
    AttachStdout: false,
    AttachStderr: false,
    ExposedPorts: { '8080/tcp': {} },
    Tty: false,
    OpenStdin: false,
    StdinOnce: false,
    Env: ['PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin'],
    Cmd: null,
    Image: 'mv-code-server',
    Volumes: null,
    WorkingDir: '',
    Entrypoint: ['code-server', '--host', '0.0.0.0'],
    OnBuild: null,
    Labels: {
      'org.opencontainers.image.ref.name': 'ubuntu',
      'org.opencontainers.image.version': '22.04'
    }
  },
  NetworkSettings: {
    Bridge: '',
    SandboxID:
      '5834c50c38f5b78274245206d9a19aa8c2aec5da1713f3f933b1d04c22c0003d',
    HairpinMode: false,
    LinkLocalIPv6Address: '',
    LinkLocalIPv6PrefixLen: 0,
    Ports: {
      '8080/tcp': [
        { HostIp: '0.0.0.0', HostPort: '8000' },
        { HostIp: '::', HostPort: '8000' }
      ]
    },
    SandboxKey: '/var/run/docker/netns/5834c50c38f5',
    SecondaryIPAddresses: null,
    SecondaryIPv6Addresses: null,
    EndpointID:
      'f468531559b243e9a4fff3839f0f694eed2c0f04015ed6624b3316f2e859095c',
    Gateway: '172.17.0.1',
    GlobalIPv6Address: '',
    GlobalIPv6PrefixLen: 0,
    IPAddress: '172.17.0.2',
    IPPrefixLen: 16,
    IPv6Gateway: '',
    MacAddress: '02:42:ac:11:00:02',
    Networks: {
      bridge: {
        IPAMConfig: null,
        Links: null,
        Aliases: null,
        NetworkID:
          'adff8d457874099bf8967c73569a03618289666d04177f01d9cd51cd647a1aaa',
        EndpointID:
          'f468531559b243e9a4fff3839f0f6 94eed2c0f04015ed6624b3316f2e859095c',
        Gateway: '172.17.0.1',
        IPAddress: '172.17.0.2',
        IPPrefixLen: 16,
        IPv6Gateway: '',
        GlobalIPv6Address: '',
        GlobalIPv6PrefixLen: 0,
        MacAddress: '02:42:ac:11:00:02',
        DriverOpts: null
      }
    }
  }
})

describe('A container', () => {
  it('has a port', () => {
    expect(container.getPort()).toEqual('8000')
  })
})
